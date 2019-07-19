import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanFormComponent } from './chan-form.component';

describe('ChanFormComponent', () => {
  let component: ChanFormComponent;
  let fixture: ComponentFixture<ChanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
