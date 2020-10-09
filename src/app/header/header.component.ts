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
      Icon: 'uae-flag.png',
      Text: 'Emirates'
    },
    {
      Icon: 'india-flag.jpg',
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
      Icon: 'uae-flag.jpg',
      Text: 'Arabic'
    },
    {
      Icon: 'india-flag.jpg',
      Text: 'Hindi'
    }
  ];
  constructor() { }

  ngOnInit() {

  }

}
