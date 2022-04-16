import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkVideoComponent } from './link-video.component';

describe('LinkVideoComponent', () => {
  let component: LinkVideoComponent;
  let fixture: ComponentFixture<LinkVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
