import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true
})
export class ProjectsComponent {
  projects = [
    {
      title: 'PaintAnalog (WPF)',
      description: `A custom-built Paint analog made with WPF and MVVM.
        Features include drawing tools, image & text manipulation, selection with confirmation, undo/redo, clipboard support,
        transform handles (resizing, rotating), and a modular tool system. Built for responsive, precise user interaction.`,
      link: 'https://github.com/Merzki/PaintAnalog'
    },
    {
      title: 'Merzkiself (Angular)',
      description: `Personal portfolio built with Angular. Responsive design, themed support, component-based structure,
        and dynamic rendering through data-driven architecture. Showcases experience and dev approach.`,
      link: 'https://github.com/Merzki/Merzkiself'
    },
    {
      title: 'MIOSM (Organization)',
      description: `MIOSM is an organization building a prototype of a social network 
        based on a microservice architecture. The project combines Angular on the frontend 
        with Spring on the backend, supported by distributed storage for scalable data management. 
        Its primary goal is to simulate a real-world development environment by creating a 
        product-oriented system that addresses genuine user needs, serving both as a learning 
        platform and as a practical implementation of modern software practices.`,
      link: 'https://github.com/MIOSM'
    }
  ];
}
