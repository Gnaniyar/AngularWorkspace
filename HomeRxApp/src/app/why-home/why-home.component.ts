import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-home',
  templateUrl: './why-home.component.html',
  styleUrls: ['./why-home.component.css']
})
export class WhyHomeComponent implements OnInit {

  counter(i: number) {
    return new Array(i);
  }

  constructor() { }

  ngOnInit() {
  }

}
