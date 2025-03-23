import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ItComponent } from './pages/it/it.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LayoutComponent } from './common-ui/layout/layout.component';

export const routes: Routes = [
    {
    path: '', component: LayoutComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'it', component: ItComponent },
        { path: 'contact', component: ContactComponent },
        { path: '**', redirectTo: 'home' } 
    ],
},
    {path: 'home',component: HomeComponent},
];
