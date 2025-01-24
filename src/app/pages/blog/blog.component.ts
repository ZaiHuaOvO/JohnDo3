import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TitleComponent } from '../../components/title/title.component';
import { QuickUp } from '../../common_ui/animations/animation';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { MeComponent } from '../../components/me/me.component';
import { OtherComponent } from '../../components/other/other.component';

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
export class BlogComponent {
  data = [
    {
      title: '探索新世界：奇幻冒险之旅',
      content: '一款让玩家扮演探险者的开放世界游戏，体验未知领域的神秘与惊喜。',
      view: 4523,
      heart: 320,
      date: '2025-01-15',
      tag: '冒险',
    },
    {
      title: '荣耀战场：英雄对决',
      content:
        '在这个策略战争游戏中，组建你的军队，与全球玩家一较高下，赢得胜利。',
      view: 6720,
      heart: 510,
      date: '2025-01-12',
      tag: '策略',
    },
    {
      title: '未来赛车：极速狂飙',
      content: '驾驶炫酷的未来赛车，挑战极限赛道，感受前所未有的速度快感。',
      view: 8311,
      heart: 720,
      date: '2025-01-20',
      tag: '竞速',
    },
    {
      title: '丧尸围城：生存之战',
      content: '面对成群的丧尸，玩家需要寻找资源、建立庇护所并生存下去。',
      view: 3948,
      heart: 290,
      date: '2025-01-10',
      tag: '生存',
    },
    {
      title: '神秘岛屿：解谜之旅',
      content: '解锁隐藏的谜题，揭开神秘岛屿背后的真相，考验你的智慧与勇气。',
      view: 5280,
      heart: 410,
      date: '2025-01-18',
      tag: '解谜',
    },
    {
      title: '魔法学院：巫师的抉择',
      content: '扮演年轻巫师，在魔法学院学习法术，与其他巫师展开斗法。',
      view: 6123,
      heart: 540,
      date: '2025-01-16',
      tag: '角色扮演',
    },
    {
      title: '银河战舰：星际征服',
      content: '指挥你的星际战舰，探索未知的宇宙，征服新的星系与敌人战斗。',
      view: 7431,
      heart: 610,
      date: '2025-01-14',
      tag: '科幻',
    },
    {
      title: '像素地牢：勇者传说',
      content: '经典像素风地牢冒险，挑战各类强大的怪物，收集宝藏升级装备。',
      view: 2812,
      heart: 200,
      date: '2025-01-13',
      tag: '像素',
    },
    {
      title: '极限生存：荒野求生',
      content:
        '在这个开放世界游戏中，玩家需要在极端环境中寻找食物、建造避难所。',
      view: 4920,
      heart: 330,
      date: '2025-01-19',
      tag: '冒险',
    },
    {
      title: '卡牌争霸：策略之王',
      content: '收集强大的卡牌组合，制定策略击败对手，成为卡牌世界的王者。',
      view: 3851,
      heart: 280,
      date: '2025-01-11',
      tag: '卡牌',
    },
  ];
}
