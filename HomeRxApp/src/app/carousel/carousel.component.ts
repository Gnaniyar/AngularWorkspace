import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  LeftGrayArrowClass = true;
  RightGrayArrowClass = false;

  slideIndicators: any[] = [
    {
      index: 1,
      isActive: true
    },
    {
      index: 2,
      isActive: false
    },
    {
      index: 3,
      isActive: false
    },

  ];
  @ViewChild('angularcarousel') myCarousel: NgbCarousel;

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

  moveNext() {
    this.myCarousel.next();
  }

  movePrevious() {
    this.myCarousel.prev();
  }

  onSlide(event: NgbSlideEvent) {
    this.RightGrayArrowClass = false;
    this.LeftGrayArrowClass = false;
    if ( parseInt(event.current, 0)  === 1) {
      this.LeftGrayArrowClass = true;
    } else if (parseInt(event.current, 0)  === this.slideIndicators.length) {
      this.RightGrayArrowClass = true;
    }
    this.slideIndicators.forEach((indicator) => {
      if (indicator.index.toString() === event.current) {
        indicator.isActive = true;
      } else {
        indicator.isActive = false;
      }
    });
  }

}
