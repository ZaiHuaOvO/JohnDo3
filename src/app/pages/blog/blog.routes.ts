import { Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
export const BLOG_ROUTES: Routes = [
    { path: '', component: BlogComponent },
    { path: ':id', component: BlogDetailComponent }
];
