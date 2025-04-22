import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { BlogService } from '../blog.service';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { GeneralService } from '../../../services/general.service';
import { debounceTime } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { SlowUp, QuickUp } from '../../../common_ui/animations/animation';
import { WindowService } from '../../../services/window.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { BlogTitleComponent } from '../../../components/blog-title/blog-title.component';

@Component({
  selector: 'doe-blog-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzFlexModule,
    NzIconModule,
    NzTagModule,
    NzTypographyModule,
    NzDividerModule,
    MarkdownModule,
    NzPageHeaderModule,
    NzAvatarModule,
    NzAnchorModule,
    DatePipe,
    BlogTitleComponent,
    NzToolTipModule
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
  animations: [SlowUp, QuickUp],
})
export class BlogDetailComponent implements OnInit {
  data: any = {};
  page = 1;
  count = 0;
  tag = '';
  tagList: any[] = [];
  loading = true;
  markdownContent: string = '';
  anchors: Array<{
    children: any;
    href: string;
    title: string;
  }> = [];
  currentAnchor: string | undefined;
  targetOffset: number = 0;
  isMobile: boolean = false;
  private isSyncing = false;

  @ViewChild('editor', { static: true })
  editorRef!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('viewer', { static: true }) viewerRef!: ElementRef<HTMLDivElement>;
  constructor(
    private blog: BlogService,
    private general: GeneralService,
    private activateInfo: ActivatedRoute,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object, // 注入 PLATFORM_ID 以检测运行平台
    private window: WindowService,
    private msg: NzMessageService
  ) {
    this.window.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  ngOnInit() {
    this.getBlogDetail();
  }

  getBlogDetail(): void {
    this.loading = true;
    this.blog
      .getBlogDetail(this.activateInfo.snapshot.params['id'])
      .subscribe((res: any) => {
        this.data = res['data'];
        this.markdownContent = this.data.content;
        this.loading = false;
      });
    if (isPlatformBrowser(this.platformId)) {
      this.targetOffset = window.innerHeight / 2;
    }
  }

  generateAnchors(): void {
    const headings = this.el.nativeElement.querySelectorAll('h1, h2, h3, h4');
    this.anchors = [];

    let currentH1: { children: any; href: string; title: string } | null = null;
    let currentH2: { children: any; href: string; title: string } | null = null;
    let currentH3: { children: any; href: string; title: string } | null = null;

    headings.forEach((heading: HTMLElement, index: number) => {
      const id = `heading-${index}`;
      heading.id = id;
      const tagName = heading.tagName.toLowerCase();

      if (tagName === 'h1') {
        currentH1 = { href: `#${id}`, title: heading.innerText, children: [] };
        this.anchors.push(currentH1);
        currentH2 = null; // Reset currentH2 when a new H1 is found
        currentH3 = null; // Reset currentH3 when a new H1 is found
      } else if (tagName === 'h2' && currentH1) {
        currentH2 = { href: `#${id}`, title: heading.innerText, children: [] };
        currentH1.children.push(currentH2);
        currentH3 = null; // Reset currentH3 when a new H2 is found
      } else if (tagName === 'h3' && currentH2) {
        currentH3 = { href: `#${id}`, title: heading.innerText, children: [] };
        currentH2.children.push(currentH3);
      } else if (tagName === 'h4' && currentH3) {
        currentH3.children.push({ href: `#${id}`, title: heading.innerText });
      }
    });
  }

  onBack(): void {
    history.go(-1);
  }

  onScroll(source: 'editor' | 'viewer'): void {
    console.log('source: ', source);
    if (this.isSyncing) return; // 防止递归调用

    this.isSyncing = true;

    const editor = this.editorRef.nativeElement;
    const viewer = this.viewerRef.nativeElement;

    const sourceElement = source === 'editor' ? editor : viewer;
    const targetElement = source === 'editor' ? viewer : editor;

    // 计算滚动比例
    const scrollRatio =
      sourceElement.scrollTop /
      (sourceElement.scrollHeight - sourceElement.clientHeight);

    // 应用滚动比例到目标元素
    targetElement.scrollTop =
      scrollRatio * (targetElement.scrollHeight - targetElement.clientHeight);

    this.isSyncing = false;
  }
}
