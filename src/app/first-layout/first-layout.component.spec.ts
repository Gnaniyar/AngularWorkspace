import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLayoutComponent } from './first-layout.component';

describe('FirstLayoutComponent', () => {
  let component: FirstLayoutComponent;
  let fixture: ComponentFixture<FirstLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
