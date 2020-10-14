import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLayoutComponent } from './second-layout.component';

describe('SecondLayoutComponent', () => {
  let component: SecondLayoutComponent;
  let fixture: ComponentFixture<SecondLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
