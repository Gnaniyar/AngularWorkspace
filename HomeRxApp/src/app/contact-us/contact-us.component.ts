import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactCards: any[] = [
    {
      title: 'Residential',
      description: 'Sample Resedential deail for user to know what residentilal is meant.'
    },
    {
      title: 'Block Management',
      description: 'Sample Resedential deail for user to know what Block Management is meant.'
    },
    {
      title: 'Commercial',
      description: 'Sample Resedential deail for user to know what Commercial is meant.'
    },
    {
      title: 'Hospitality',
      description: 'Sample Resedential deail for user to know what Hospitality is meant.'
    },
    {
      title: 'Site Management',
      description: 'Sample Resedential deail for user to know what Site Management is meant.'
    },
    {
      title: 'Legal Advice',
      description: 'Sample Resedential deail for user to know what legal advice is meant.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
