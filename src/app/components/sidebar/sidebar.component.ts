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
      document.documentElement.style.setProperty('--dark-color', '#F5F5F5');
      document.documentElement.style.setProperty('--light-color', '#0D0D0D');
      document.documentElement.style.setProperty('--primary-color', '#4169E1'); 
      document.documentElement.style.setProperty('--dark-primary-color', '#27408B');
      document.documentElement.style.setProperty('--gray-color', '#B0B0B0');
      document.documentElement.style.setProperty('--dark-gray-color', '#E0E0E0');
      document.documentElement.style.setProperty('--dark-hover-color', '#D9D9D9');

      document.documentElement.style.setProperty('--icon-filter', 'invert(27%) sepia(88%) saturate(1803%) hue-rotate(199deg) brightness(95%) contrast(104%)');
      document.documentElement.style.setProperty('--box-shadow', '0 4px 12px rgba(0, 0, 0, 0.2)'); 
    } else {
      document.documentElement.style.setProperty('--dark-color', '#0D0D0D');
      document.documentElement.style.setProperty('--light-color', '#F5F5F5');
      document.documentElement.style.setProperty('--primary-color', '#B22234');
      document.documentElement.style.setProperty('--dark-primary-color', '#8A1C28');
      document.documentElement.style.setProperty('--gray-color', '#6C757D');
      document.documentElement.style.setProperty('--dark-gray-color', '#2C2F33');
      document.documentElement.style.setProperty('--dark-hover-color', '#1B1B1B');

      document.documentElement.style.setProperty('--icon-filter', 'invert(17%) sepia(93%) saturate(5295%) hue-rotate(-8deg) brightness(94%) contrast(105%)');
      document.documentElement.style.setProperty('--box-shadow', '0 6px 10px rgba(255, 255, 255, 0.03)'); 
    }
  }
}
