import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHomeComponent } from './why-home.component';

describe('WhyHomeComponent', () => {
  let component: WhyHomeComponent;
  let fixture: ComponentFixture<WhyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
