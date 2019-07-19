import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllChannelsComponent } from './view-all-channels.component';

describe('ViewAllChannelsComponent', () => {
  let component: ViewAllChannelsComponent;
  let fixture: ComponentFixture<ViewAllChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
