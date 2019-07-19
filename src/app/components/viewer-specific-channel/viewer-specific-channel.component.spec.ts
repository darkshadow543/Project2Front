import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerSpecificChannelComponent } from './viewer-specific-channel.component';

describe('ViewerSpecificChannelComponent', () => {
  let component: ViewerSpecificChannelComponent;
  let fixture: ComponentFixture<ViewerSpecificChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerSpecificChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerSpecificChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
