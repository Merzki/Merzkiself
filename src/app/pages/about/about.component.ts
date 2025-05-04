import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [NgFor],
  animations: [
    trigger('fadeSlide', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(30px)'
      })),
      transition('hidden => visible', [
        animate('600ms ease-in-out')
      ]),
      transition('visible => hidden', [
        animate('200ms ease-out')
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      image: 'assets/imgs/me1.jpg',
      text: "Hi, I'm Anton, an 20-year-old programming enthusiast, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
  ];

  currentSlide = 0;
  slideDuration = 5000; 
  intervalId: any;
  animationState: 'visible' | 'hidden' = 'hidden';

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = 'visible';
    });
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startSlideshow(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  
    this.intervalId = setInterval(() => {
      this.animationState = 'hidden';

      setTimeout(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.animationState = 'visible';
      }, 200); 
    }, this.slideDuration);
  }
}