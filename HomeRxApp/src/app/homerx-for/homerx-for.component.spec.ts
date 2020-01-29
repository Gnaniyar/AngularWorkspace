import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerxForComponent } from './homerx-for.component';

describe('HomerxForComponent', () => {
  let component: HomerxForComponent;
  let fixture: ComponentFixture<HomerxForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerxForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerxForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
