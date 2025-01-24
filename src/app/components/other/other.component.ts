import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { SlowUp } from '../../common_ui/animations/animation';

@Component({
  selector: 'doe-other',
  standalone: true,
  imports: [NzTypographyModule, NzFlexModule, NzDividerModule, NzListModule],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css',
  animations: [SlowUp],
})
export class OtherComponent {
  data =
    '啊时间和福气库房好穷午饭去哦都其实都全身都缺货都全身都缺货啥都前后啥都强收到回去披萨带回去私董会穷三代好穷我都会脾气';
  blogStarList = [
    {
      title: '探索新世界：奇幻冒险之旅',
      tag: '冒险',
    },
    {
      title: '荣耀战场：英雄对决',
      tag: '策略',
    },
    {
      title: '未来赛车：极速狂飙',
      tag: '竞速',
    },
    {
      title: '丧尸围城：生存之战',
      tag: '生存',
    },
  ];

  msgStarList = [
    {
      content: '好🐂🍺的网站1',
      name: '再花1',
    },
    {
      content: '2好🐂🍺的网站',
      name: '2再花',
    },
    {
      content: '好🐂🍺的网站3',
      name: '再花3',
    },
    {
      content: '4好🐂🍺的网站',
      name: '4再花',
    },
  ];
}
