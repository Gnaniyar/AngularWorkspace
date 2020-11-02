import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-layout',
  templateUrl: './second-layout.component.html',
  styleUrls: ['./second-layout.component.css']
})
export class SecondLayoutComponent implements OnInit {
  treeWidth = 25;
  mappingHeight = 50;
  isTreeDocked = true;
  isPreviewDocked = true;
  constructor() { }

  ngOnInit() {
  }

  dockTree(): void {
    if (this.isTreeDocked) {
      this.treeWidth = 3;
    } else {
      this.treeWidth = 25;
    }
    this.isTreeDocked = !this.isTreeDocked;
  }

  dockPreview(): void {
    if (this.isPreviewDocked) {
      this.mappingHeight = 95;
    } else {
      this.mappingHeight = 50;
    }
    this.isPreviewDocked = !this.isPreviewDocked;
  }

}
