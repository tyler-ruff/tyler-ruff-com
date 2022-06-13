import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SingleComponent } from './single/single.component';
import { UnknownComponent } from './unknown/unknown.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component:  AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'view', component: SingleComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
