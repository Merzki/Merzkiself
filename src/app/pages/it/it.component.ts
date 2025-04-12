import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-it',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.scss']
})
export class ItComponent implements OnInit {
  currentRoute = '';
  
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(event => {
        this.currentRoute = (event.urlAfterRedirects || event.url).replace('/', '');
      });
  }

  ngOnInit() {
    this.currentRoute = this.router.url.replace('/', '');
  }

  getLinkClass(route: string): string {
    const isActive = this.currentRoute.includes(route);
    const direction = route === 'skillset' ? 'from-right' : 'from-left';
    return `${isActive ? 'active-link' : ''} ${direction}`;
  }
}
