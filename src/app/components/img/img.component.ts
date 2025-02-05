import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NzImage, NzImageModule, NzImageService } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'doe-img',
  standalone: true,
  imports: [NzTypographyModule, NzImageModule, DatePipe],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css',
})
export class ImgComponent {
  @Input() IMG = {
    url: '',
    water_url: '',
    title: '',
    content: '',
    date: '',
  };
  private nzImageService = inject(NzImageService);
  constructor() {

  }

  preview(): void {
    const image = [{
      src: this.IMG.url,
      width: 'auto',
      height: 'auto',
      alt: this.IMG.title
    }]
    this.nzImageService.preview(image, { nzZoom: 0.9, nzRotate: 0 });
  }
}
