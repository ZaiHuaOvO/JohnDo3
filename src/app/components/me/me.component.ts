import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

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
  ],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
})
export class MeComponent {}
