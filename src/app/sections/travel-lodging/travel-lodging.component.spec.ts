import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelLodgingComponent } from './travel-lodging.component';

describe('TravelLodgingComponent', () => {
  let component: TravelLodgingComponent;
  let fixture: ComponentFixture<TravelLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelLodgingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
