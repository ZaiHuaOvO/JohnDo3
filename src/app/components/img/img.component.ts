import { Component, Input } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'doe-img',
  standalone: true,
  imports: [NzTypographyModule, NzImageModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css',
})
export class ImgComponent {
  @Input() IMG = {
    url: '',
    title: '',
    content: '',
    date: '',
  };
}
