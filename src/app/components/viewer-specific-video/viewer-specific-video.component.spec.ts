import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerSpecificVideoComponent } from './viewer-specific-video.component';

describe('ViewerSpecificVideoComponent', () => {
  let component: ViewerSpecificVideoComponent;
  let fixture: ComponentFixture<ViewerSpecificVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerSpecificVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerSpecificVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
