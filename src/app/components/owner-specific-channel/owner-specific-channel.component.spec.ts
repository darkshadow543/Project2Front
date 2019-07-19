import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSpecificChannelComponent } from './owner-specific-channel.component';

describe('OwnerSpecificChannelComponent', () => {
  let component: OwnerSpecificChannelComponent;
  let fixture: ComponentFixture<OwnerSpecificChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerSpecificChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerSpecificChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
