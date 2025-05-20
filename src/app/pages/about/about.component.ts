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
      text: "Hi, I'm Anton, an 18-year-old programming enthusiast..."
    },
    {
      image: 'assets/imgs/me1.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: 'assets/imgs/me1.jpg',
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];
  currentSlide = 0;
  animationState: 'enter' | 'leave' = 'enter';
  slideDuration = 4000;
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