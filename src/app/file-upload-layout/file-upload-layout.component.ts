import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload-layout',
  templateUrl: './file-upload-layout.component.html',
  styleUrls: ['./file-upload-layout.component.css']
})
export class FileUploadLayoutComponent implements OnInit {
  showDelimeterMenu = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDelimeterMenu(): void {
    this.showDelimeterMenu = !this.showDelimeterMenu;
  }
}
