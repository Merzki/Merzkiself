import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidebarComponent],
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
}
