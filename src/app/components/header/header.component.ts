import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { QuickDown } from '../../common_ui/animations/animation';

@Component({
  selector: 'doe-header',
  standalone: true,
  imports: [
    CommonModule,
    NzFlexModule,
    NzIconModule,
    RouterModule,
    NzTypographyModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [QuickDown],
})
export class HeaderComponent {
  isHidden = false; // 控制隐藏状态
  lastScrollTop = 0; // 记录上一次的滚动位置

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 如果向下滚动并且当前没有隐藏，则隐藏
    if (scrollTop > this.lastScrollTop && !this.isHidden) {
      this.isHidden = true;
    }
    // 如果向上滚动并且当前隐藏，则显示
    if (scrollTop < this.lastScrollTop && this.isHidden) {
      this.isHidden = false;
    }

    // 更新上一次的滚动位置
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 防止负值
  }
  menuList = [
    {
      title: '首页',
      icon: 'home',
      url: '/blog',
      child: [],
    },
    {
      title: '相册',
      icon: 'picture',
      url: '/blog',
      child: [],
    },
    {
      title: '关于',
      icon: 'user',
      url: '/blog',
      child: [],
    },
  ];
}
