import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  isLightTheme = false;

  menuItems = [
    { label: 'Home', link: 'home', icon: 'home' },
    { label: 'About', link: 'about', icon: 'info' },
    { label: 'IT', link: 'it', icon: 'prog' },
    { label: 'Contact', link: 'contact', icon: 'contact' }
  ];

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isLightTheme = savedTheme === 'light';
    this.applyTheme();
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
    this.applyTheme();
  }

  applyTheme() {
    if (this.isLightTheme) {
      document.documentElement.style.setProperty('--dark-color', '#E0E0FF');
      document.documentElement.style.setProperty('--light-color', '#01012b');
      document.documentElement.style.setProperty('--primary-color', '#05d9e8');
      document.documentElement.style.setProperty('--dark-primary-color', '#05d9e8');
      document.documentElement.style.setProperty('--secondary-color', '#ff2a6d');
      document.documentElement.style.setProperty('--accent-color', '#d1f7ff');
      document.documentElement.style.setProperty('--gray-color', '#B0C4DE');
      document.documentElement.style.setProperty('--dark-gray-color', '#1a1a2e');
      document.documentElement.style.setProperty('--dark-hover-color', '#F0F8FF');

      document.documentElement.style.setProperty('--icon-filter', 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(199deg) brightness(104%) contrast(101%)');
      document.documentElement.style.setProperty('--box-shadow', '0 4px 12px rgba(5, 217, 232, 0.2)');
      document.documentElement.style.setProperty('--text-shadow', '0 0 8px rgba(5, 217, 232, 0.6)');
      document.documentElement.style.setProperty('--neon-glow', '0 0 10px rgba(5, 217, 232, 0.8), 0 0 20px rgba(5, 217, 232, 0.4)');
    } else {
      document.documentElement.style.setProperty('--dark-color', '#01012b');
      document.documentElement.style.setProperty('--light-color', '#ffffff');
      document.documentElement.style.setProperty('--primary-color', '#ff2a6d');
      document.documentElement.style.setProperty('--dark-primary-color', '#ff2a6d');
      document.documentElement.style.setProperty('--secondary-color', '#05d9e8');
      document.documentElement.style.setProperty('--accent-color', '#d1f7ff');
      document.documentElement.style.setProperty('--gray-color', '#8A8AFF');
      document.documentElement.style.setProperty('--dark-gray-color', '#1a1a2e');
      document.documentElement.style.setProperty('--dark-hover-color', '#1A1A2F');

      document.documentElement.style.setProperty('--icon-filter', 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(325deg) brightness(104%) contrast(101%)');
      document.documentElement.style.setProperty('--box-shadow', '0 4px 12px rgba(255, 42, 109, 0.2)');
      document.documentElement.style.setProperty('--text-shadow', '0 0 8px rgba(255, 42, 109, 0.6)');
      document.documentElement.style.setProperty('--neon-glow', '0 0 10px rgba(255, 42, 109, 0.8), 0 0 20px rgba(255, 42, 109, 0.4)');
    }
  }
}
