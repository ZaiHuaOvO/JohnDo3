import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'doe-other',
  standalone: true,
  imports: [NzTypographyModule, NzFlexModule, NzDividerModule],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css',
})
export class OtherComponent {
  data =
    '啊时间和福气库房好穷午饭去哦都其实都全身都缺货都全身都缺货啥都前后啥都强收到回去披萨带回去私董会穷三代好穷我都会脾气';
}
