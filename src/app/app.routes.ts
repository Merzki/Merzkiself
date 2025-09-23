import { Routes } from '@angular/router';
import { LayoutComponent } from './common-ui/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
      {
        path: 'it',
        loadComponent: () => import('./pages/it/it.component').then(m => m.ItComponent),
        children: [
          { path: '', redirectTo: 'skillset', pathMatch: 'full' },
          { path: 'skillset', loadComponent: () => import('./pages/it/skillset/skillset.component').then(m => m.SkillsetComponent) },
          { path: 'projects', loadComponent: () => import('./pages/it/projects/projects.component').then(m => m.ProjectsComponent) }
        ]
      },
      { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
      { path: '**', redirectTo: 'home' }
    ]
  },
];
