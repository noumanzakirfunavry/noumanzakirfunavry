import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFileUploaderComponent } from './shared-file-uploader.component';

describe('SharedFileUploaderComponent', () => {
  let component: SharedFileUploaderComponent;
  let fixture: ComponentFixture<SharedFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFileUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
