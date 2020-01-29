import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatProblemComponent } from './what-problem.component';

describe('WhatProblemComponent', () => {
  let component: WhatProblemComponent;
  let fixture: ComponentFixture<WhatProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
