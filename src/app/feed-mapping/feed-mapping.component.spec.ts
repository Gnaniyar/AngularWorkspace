import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMappingComponent } from './feed-mapping.component';

describe('FeedMappingComponent', () => {
  let component: FeedMappingComponent;
  let fixture: ComponentFixture<FeedMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
