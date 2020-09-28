import { Component, Input, OnInit, Output } from '@angular/core';
import { Form } from '@angular/forms';
import { IListItem } from '../shared/IListItem';


@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  showMenu = false;
  @Input() Source: IListItem[];
  private _defaultText = '';
  @Input()
  get DefaultText(): string { return this._defaultText; }
  set DefaultText(value: string) {
    this._defaultText = (value && value.trim()) || 'Select Any';
    this.SelectedItem.Text = this._defaultText;
  }
  @Output() SelectedItem: IListItem = {
    Text: this.DefaultText,
    Icon: ''
  };
  constructor() {

  }

  ngOnInit() {

  }

  setSelectedListItem(Source: IListItem): void {
    this.SelectedItem = Source;
    this.showMenu = false;
  }

  toggleList(): void {
    this.showMenu = !this.showMenu;
  }

}
