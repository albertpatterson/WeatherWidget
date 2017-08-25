import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WeatherWidgetComponent]
})
export class AppModule { }
