import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSpinnerComponent } from './weather-spinner.component';

describe('WeatherSpinnerComponent', () => {
  let component: WeatherSpinnerComponent;
  let fixture: ComponentFixture<WeatherSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
