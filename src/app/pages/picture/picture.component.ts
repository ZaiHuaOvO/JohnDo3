import { Component } from '@angular/core';
import { ImgComponent } from '../../components/img/img.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { PictureService } from './picture.service';

@Component({
  selector: 'doe-picture',
  standalone: true,
  imports: [CommonModule, ImgComponent, NzGridModule],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css',
  animations: [
    trigger('QuickUp', [
      transition(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          animate(
            '{{delay}} ease-in',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ],
        { params: { delay: '250ms' } }
      ), // 默认参数
    ]),
  ],
})
export class PictureComponent {
  images = [];

  constructor(
    private pictureService: PictureService
  ) {
    this.getPics();
  }

  getPics() {
    this.pictureService.getPicList().subscribe((res: any) => {
      this.images = res['data'];
    });
  }
}
