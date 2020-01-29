import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('header initialization');
  }

  GoToSupport() {
    const section = document.querySelector('#home-support');
    if (section)
    {
      section.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
  }

  GoToTestimonials() {
    const section = document.querySelector('#people-say');
    if (section)
    {
      section.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
  }

  GoToFooter() {
    const section = document.querySelector('#home-footer');
    if (section)
    {
      section.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
  }
}
