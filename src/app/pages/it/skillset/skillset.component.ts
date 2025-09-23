import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [NgClass],
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss'] 
})
export class SkillsetComponent {
  sections = [
    {
      class: 'frontend',
      title: 'Frontend',
      description: 'Crafting user-friendly and stylish interfaces that are adaptive and fast',
      items: [
        { label: 'Markup', value: 'HTML, CSS, SCSS' },
        { label: 'Logic', value: 'JavaScript, TypeScript' },
        { label: 'Framework', value: 'Angular, jQuery' }
      ]
    },
    {
      class: 'backend',
      title: 'Backend',
      description: 'Ensuring stable backend performance with well-thought-out API architecture',
      items: [
        { label: 'Language', value: 'PHP' },
        { label: 'Framework', value: 'Express.js, Spring Framework' } 
      ]
    },
    {
      class: 'desktop',
      title: 'Desktop',
      description: 'Developing intuitive and functional Windows applications with great UI and logic',
      items: [{ label: 'Technologies', value: 'WPF, WinForms' }]
    },
    {
      class: 'devops',
      title: 'DevOps',
      description: 'Containerizing, automating deployment, and managing clusters',
      items: [
        { label: 'Containerization', value: 'Docker, Kubernetes (kind)' },
        { label: 'Platforms', value: 'Heroku, AWS, Nginx' },
        { label: 'Security & IAM', value: 'Keycloak' }
      ]
    },
    {
      class: 'databases',
      title: 'Databases',
      description: 'Designing databases, optimizing queries, and working with SQL',
      items: [
        { label: 'RDBMS', value: 'MySQL, SQLite, Microsoft SQL Server' },
        { label: 'Object Storage', value: 'MinIO' } 
      ]
    }
  ];
}
