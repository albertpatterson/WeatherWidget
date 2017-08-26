import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableLocationWeatherWidgetComponent } from './variable-location-weather-widget.component';

describe('VariableLocationWeatherWidgetComponent', () => {
  let component: VariableLocationWeatherWidgetComponent;
  let fixture: ComponentFixture<VariableLocationWeatherWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableLocationWeatherWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableLocationWeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
