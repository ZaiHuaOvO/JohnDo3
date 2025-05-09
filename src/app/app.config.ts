import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { zh_CN, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { provideNzIcons } from './icons-provider';
import { MarkdownModule } from 'ngx-markdown';

const icons: any[] = Object.values(AllIcons);

registerLocaleData(zh);
registerLocaleData(zh);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideNzIcons(icons),
    provideNzI18n(zh_CN),
    importProvidersFrom(FormsModule, MarkdownModule.forRoot()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ],
};
