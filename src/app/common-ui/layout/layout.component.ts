import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';

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
