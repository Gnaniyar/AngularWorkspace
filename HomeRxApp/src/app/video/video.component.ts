import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  displayUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.displayUrl = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/0_IO-27ow6w');
  }

  ngOnInit() {
  }

}
