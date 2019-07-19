import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanOwnComponent } from './chan-own.component';

describe('ChanOwnComponent', () => {
  let component: ChanOwnComponent;
  let fixture: ComponentFixture<ChanOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
