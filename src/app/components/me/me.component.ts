import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { SlowUp } from '../../common_ui/animations/animation';

@Component({
  selector: 'doe-me',
  standalone: true,
  imports: [
    NzFlexModule,
    CommonModule,
    NzAvatarModule,
    NzTypographyModule,
    NzIconModule,
    NzTagModule,
    NzListModule,
  ],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
  animations: [SlowUp],
})
export class MeComponent {
  blogTagList = [
    {
      type: '游戏',
      value: 14,
    },
    {
      type: '自言自语',
      value: 23,
    },
    {
      type: '旅游',
      value: 2,
    },
  ];
  picTagList = [
    {
      type: '游戏',
      value: 106,
    },
    {
      type: '旅游',
      value: 34,
    },
    {
      type: '美食',
      value: 51,
    },
    {
      type: '杂图',
      value: 14,
    },
  ];
}
