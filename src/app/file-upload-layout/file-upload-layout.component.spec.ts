import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadLayoutComponent } from './file-upload-layout.component';

describe('FileUploadLayoutComponent', () => {
  let component: FileUploadLayoutComponent;
  let fixture: ComponentFixture<FileUploadLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
