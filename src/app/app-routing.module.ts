import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmailBuilderComponent } from './components/email-builder/email-builder.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'about', 
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'projects',
    component:ProjectsComponent,
  },
  {
    path: 'projects/email-builder',
    component: EmailBuilderComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
