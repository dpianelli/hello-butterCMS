import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
// import { SpecsComponent } from './specs/specs.component';
// import { ItemsComponent } from './items/items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ItemDetailComponent } from './item-detail/item-detail.component';
// import { OverviewComponent } from './overview/overview.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
   { path: 'home', component: HomeComponent},
   { path: 'blog', component: BlogComponent},
   { path: 'blog/:id', component: BlogPostComponent,
    children: [
      { path: '', redirectTo: 'test', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
