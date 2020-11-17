import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-mapping',
  templateUrl: './feed-mapping.component.html',
  styleUrls: ['./feed-mapping.component.css']
})
export class FeedMappingComponent implements OnInit {
  treeWidth = 25;
  mappingHeight = 50;
  isTreeDocked = true;
  isPreviewDocked = true;
  isMapview = true;
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

  toggleMapView(): void {
    this.isMapview = !this.isMapview;
  }
  constructor() { }

  ngOnInit() {
  }

}
