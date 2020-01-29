import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatPeopleSayComponent } from './what-people-say.component';

describe('WhatPeopleSayComponent', () => {
  let component: WhatPeopleSayComponent;
  let fixture: ComponentFixture<WhatPeopleSayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatPeopleSayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatPeopleSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
