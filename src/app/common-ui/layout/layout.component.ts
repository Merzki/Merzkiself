import { Component, HostBinding } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isSidebarOpen = false;

  @HostBinding('class.open') get openClass() {
    return this.isSidebarOpen;
  }

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        if (this.isSidebarOpen) {
          this.isSidebarOpen = false;
        }
      });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  xviiArray = Array.from({ length: 20 }, () => ({
    delay: Math.random() * 3000,
    duration: 8000 + Math.random() * 4000, 
    startLeft: Math.random() * 100,
    startTop: Math.random() * 100
  }));
}
