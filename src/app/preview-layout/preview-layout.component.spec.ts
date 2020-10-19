import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewLayoutComponent } from './preview-layout.component';

describe('PreviewLayoutComponent', () => {
  let component: PreviewLayoutComponent;
  let fixture: ComponentFixture<PreviewLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
