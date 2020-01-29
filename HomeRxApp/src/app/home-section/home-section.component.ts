import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FadeIn, SlideInOutAnimation } from '../animations';
declare var $: any;

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
  animations: [FadeIn, SlideInOutAnimation]
})
export class HomeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  GoToSupport() {
    const section = document.querySelector('#home-support');
    if (section)
    {
      section.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
  }

  GoToWhatsProblem() {
    const section = document.querySelector('#what-problem');
    if (section)
    {
      section.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 50) {
      const element = $('.header-sticky');
      element.addClass('open');
    } else {
      const element = $('.header-sticky');
      element.removeClass('open');
    }
  }

}
