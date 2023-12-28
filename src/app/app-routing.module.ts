import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillComponent } from './pages/skill/skill.component';

const routes: Routes = [
  {path:' ',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'project',component:ProjectsComponent},
  {path:'skill',component:SkillComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
