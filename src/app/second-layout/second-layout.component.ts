import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-layout',
  templateUrl: './second-layout.component.html',
  styleUrls: ['./second-layout.component.css']
})
export class SecondLayoutComponent implements OnInit {
  treeWidth = 25;
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
    this.isPreviewDocked = !this.isPreviewDocked;
  }

}
