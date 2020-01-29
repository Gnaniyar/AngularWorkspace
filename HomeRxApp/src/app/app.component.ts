import { Component, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { SlideInOutAnimation } from './animations';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [SlideInOutAnimation]
})
export class AppComponent {
  title = 'HomeRxApp';
  subTitle = 'Home Rx';

  constructor(@Inject(DOCUMENT) document) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 550) {
      // const element = $('.header-sticky');
      // element.addClass('open');
    } else {
      // const element = $('.header-sticky');
      // element.removeClass('open');
    }
  }
}
