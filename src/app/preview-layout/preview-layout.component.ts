import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-layout',
  templateUrl: './preview-layout.component.html',
  styleUrls: ['./preview-layout.component.css']
})
export class PreviewLayoutComponent implements OnInit {

  showContextMenu = false;
  constructor() { }

  ngOnInit() {
  }

  toggleCongextMenu(): void {
    this.showContextMenu = !this.showContextMenu;
  }
}
