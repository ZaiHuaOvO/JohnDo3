import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TitleComponent } from '../../components/title/title.component';
import { QuickUp } from '../../common_ui/animations/animation';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { MeComponent } from '../../components/me/me.component';
import { OtherComponent } from '../../components/other/other.component';
import { BlogService } from './blog.service';

@Component({
  selector: 'doe-blog',
  standalone: true,
  imports: [
    NzFlexModule,
    CommonModule,
    NzTypographyModule,
    NzDividerModule,
    DatePipe,
    NzIconModule,
    TitleComponent,
    NzAffixModule,
    MeComponent,
    OtherComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  animations: [QuickUp],
})
export class BlogComponent implements OnInit {
  data: any[] = [];
  webInfo: any = {};
  blogCount: number = 0;

  constructor(
    private blogService: BlogService,
  ) {
  }

  ngOnInit(): void {
    this.getBlogs();
    this.getWebInfo();
  }
  getBlogs(): void {
    this.blogService.getBlogs().subscribe((res: any) => {
      this.data = res['data'];
      this.blogCount = res['data'].count;
    })
  }

  getWebInfo(): void {
    this.blogService.getWebInfo().subscribe((res: any) => {
      this.webInfo = res['data'];
    });
  }
}
