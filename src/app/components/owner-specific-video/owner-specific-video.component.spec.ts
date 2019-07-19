import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSpecificVideoComponent } from './owner-specific-video.component';

describe('OwnerSpecificVideoComponent', () => {
  let component: OwnerSpecificVideoComponent;
  let fixture: ComponentFixture<OwnerSpecificVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerSpecificVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerSpecificVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
