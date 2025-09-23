import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('enter', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('leave', style({
        opacity: 0,
        transform: 'translateX(10%)'
      })),
      transition('leave => enter', [
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      transition('enter => leave', [
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'assets/imgs/me1.jpg',
      text: "Hi, I'm Anton - an 19 y.o self-taught developer passionate about building smart, user-friendly apps. I'm currently studying to become a software developer in Poznań, Poland"
    },
    {
      image: 'assets/imgs/me2.jpg',
      text: "Right now, I'm deepening my frontend skills - exploring advanced concepts in Angular and improving my styling workflow with Sass to write more maintainable and scalable CSS"
    },
    {
      image: 'assets/imgs/me3.jpg',
      text: "I'm currently open to all collaboration opportunities and actively looking for a frontend development position anywhere in Europe. Feel free to reach out!"
    }
  ];
  currentSlide = 0;
  animationState: 'enter' | 'leave' = 'enter';
  slideDuration = 5000;
  intervalId: any;

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.animationState = 'leave';

      setTimeout(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.animationState = 'enter';
      }, 500); 
    }, this.slideDuration);
  }
}