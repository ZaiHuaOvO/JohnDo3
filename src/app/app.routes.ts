import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
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
  {
    path: 'all',
    loadChildren: () =>
      import('./pages/all/all.routes').then((m) => m.ALL_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/error/error.routes').then((m) => m.ERROR_ROUTES),
  },
];
