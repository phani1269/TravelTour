import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabBookingComponent } from './cab-booking.component';

describe('CabBookingComponent', () => {
  let component: CabBookingComponent;
  let fixture: ComponentFixture<CabBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
