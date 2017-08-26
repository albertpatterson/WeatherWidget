import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { VariableLocationWeatherWidgetComponent } from './variable-location-weather-widget/variable-location-weather-widget.component';
import { LocationSelectorComponent } from './location-selector/location-selector.component';

import { WeatherService } from "./services/weather.service";
import { LocationService } from "./services/location.service";

@NgModule({
  declarations: [
    WeatherWidgetComponent,
    VariableLocationWeatherWidgetComponent,
    LocationSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    WeatherService,
    LocationService
  ],
  bootstrap: [VariableLocationWeatherWidgetComponent]
})
export class AppModule { }
