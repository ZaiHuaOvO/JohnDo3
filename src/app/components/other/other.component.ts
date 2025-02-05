import { Component, Input } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { SlowUp } from '../../common_ui/animations/animation';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'doe-other',
  standalone: true,
  imports: [NzTypographyModule, NzFlexModule, NzDividerModule, NzListModule, NzTagModule],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css',
  animations: [SlowUp],
})
export class OtherComponent {
  @Input() data: any = {
    blogCount: 0,
    picCount: 0,
    blogTagList: [],
    picTagList: []
  };
}
