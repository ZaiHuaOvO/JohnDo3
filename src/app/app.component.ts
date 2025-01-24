import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './components/header/header.component';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { MeComponent } from './components/me/me.component';
import { OtherComponent } from './components/other/other.component';
import { QuickDown, QuickUp, SlowUp } from './common_ui/animations/animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NzLayoutModule,
    HeaderComponent,
    NzFlexModule,
    NzAffixModule,
    MeComponent,
    OtherComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [QuickUp, SlowUp, QuickDown],
})
export class AppComponent {
  title = 'JohnDo3';
}
