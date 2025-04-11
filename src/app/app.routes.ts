import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ItComponent } from './pages/it/it.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { SkillsetComponent } from './pages/it/skillset/skillset.component';
import { ProjectsComponent } from './pages/it/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      {
        path: 'it',
        component: ItComponent,
        children: [
          { path: '', redirectTo: 'skillset', pathMatch: 'full' },
          { path: 'skillset', component: SkillsetComponent },
          { path: 'projects', component: ProjectsComponent }
        ]
      },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'home' }
    ]
  },
  { path: 'home', component: HomeComponent } 
];
