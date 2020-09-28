import { Component, OnInit } from '@angular/core';
import { IListItem } from '../shared/IListItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  DefaultContryText = 'Select Country';
  DefaultLanguageText = 'Select Language';
  Country: IListItem[] = [
    {
      Icon: 'uk-flag.jpg',
      Text: 'United Kingdom'
    },
    {
      Icon: 'usa-flag.png',
      Text: 'United States'
    },
    {
      Icon: 'uk-flag.jpg',
      Text: 'Emirates'
    },
    {
      Icon: 'uk-flag.jpg',
      Text: 'India'
    }
  ];

  Language: IListItem[] = [
    {
      Icon: 'uk-flag.jpg',
      Text: 'English'
    },
    {
      Icon: 'uk-flag.jpg',
      Text: 'English - USA'
    },
    {
      Icon: 'uk-flag.jpg',
      Text: 'Arabic'
    },
    {
      Icon: 'uk-flag.jpg',
      Text: 'Hindi'
    }
  ];
  constructor() { }

  ngOnInit() {

  }

}
