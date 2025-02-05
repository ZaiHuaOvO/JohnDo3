import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { SlowUp } from '../../common_ui/animations/animation';
import { NzDividerModule } from 'ng-zorro-antd/divider';

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
    NzDividerModule
  ],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
  animations: [SlowUp],
})
export class MeComponent {
  @Input() data: any = {
    blogCount: 0,
    picCount: 0,
    blogTagList: [],
    picTagList: []
  };
}
