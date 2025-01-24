import { Component } from '@angular/core';
import { ImgComponent } from '../../components/img/img.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

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
  images = [
    {
      url: '../../../assets/testImg/test1.png',
      title: '塔科夫测试图片',
      content: '塔科夫撤离成功测试内容教授的季后哦JPIGJPOSJDFPASOPO',
      date: '2025-01-02',
    },
    {
      url: '../../../assets/testImg/test2.png',
      title: 'APEX个人信息图片测试',
      content: '这是APEX个人信息图片测试爱死哦分红获取ASDFASFQASF',
      date: '2025-01-02',
    },
    {
      url: '../../../assets/testImg/test2.png',
      title: 'APEX个人信息图片测试',
      content: '这是APEX个人信息图片测试爱死哦分红获取ASDFASFQASF',
      date: '2025-01-02',
    },
    {
      url: '../../../assets/testImg/test1.png',
      title: '塔科夫测试图片',
      content: '塔科夫撤离成功测试内容教授的季后哦JPIGJPOSJDFPASOPO',
      date: '2025-01-02',
    },
  ];
}
