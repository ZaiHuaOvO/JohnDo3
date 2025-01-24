import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.routes').then((m) => m.BLOG_ROUTES),
  },
  {
    path: 'picture',
    loadChildren: () =>
      import('./pages/picture/picture.routes').then((m) => m.PICTURE_ROUTES),
  },
];
