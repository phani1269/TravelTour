import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCabsComponent } from './available-cabs.component';

describe('AvailableCabsComponent', () => {
  let component: AvailableCabsComponent;
  let fixture: ComponentFixture<AvailableCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableCabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
