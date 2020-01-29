import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerxReportComponent } from './homerx-report.component';

describe('HomerxReportComponent', () => {
  let component: HomerxReportComponent;
  let fixture: ComponentFixture<HomerxReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerxReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerxReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
