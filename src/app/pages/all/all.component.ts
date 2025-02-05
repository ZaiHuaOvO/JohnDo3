import { Component, inject } from '@angular/core';
import { AllService } from './all.service';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuickUp } from '../../common_ui/animations/animation';
import { NzImageModule, NzImageService } from 'ng-zorro-antd/image';

@Component({
  selector: 'doe-all',
  standalone: true,
  imports: [CommonModule, RouterModule, NzFlexModule, NzTypographyModule, NzDividerModule, NzTimelineModule, NzImageModule],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css',
  animations: [QuickUp]
})
export class AllComponent {
  data: any[] = [];
  private nzImageService = inject(NzImageService);

  constructor(
    private allService: AllService
  ) {
    this.getAll();
  }
  getAll(): void {
    this.allService.getAlls().subscribe((res: any) => {
      this.data = res['data'];
      console.log('this.dat: ', this.data);
    });
  }
  preview(img: any): void {
    const image = [{
      src: img.url,
      width: 'auto',
      height: 'auto',
      alt: img.title
    }]
    this.nzImageService.preview(image, { nzZoom: 0.9, nzRotate: 0 });
  }
}
