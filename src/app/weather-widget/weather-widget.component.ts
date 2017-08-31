import { Component, OnChanges, EventEmitter } from '@angular/core';
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  inputs: ["location", "coords"],
  outputs: ["updateLocation"]
})
export class WeatherWidgetComponent implements OnChanges {

  private status: string;

  public location: string;
  public coords: string;

  public updateLocation:EventEmitter<any> = new EventEmitter();
  
  private date: string;

  private weatherCondition: string;

  private temperature: string;

  private precipitation: string;
  
  private wind: string;

  private doUpdateLocation(): void{
    this.updateLocation.next();
  }

  constructor(private weatherService: WeatherService) { }

  ngOnChanges(){
    if(this.coords){
      this.status = "loading";
      this.weatherService.getWeatherData(this.coords)
      .then(weatherData=>{
        this.date = weatherData.date;
        this.weatherCondition = weatherData.weatherCondition;
        this.temperature = weatherData.temperature;
        this.precipitation = weatherData.precipitation;
        this.wind = weatherData.wind;
      })
      .then(()=>{
        this.status="loaded";
      })
    }else{
      this.status="loaded";
      this.date = "?";
      this.weatherCondition = "?";
      this.temperature = "?";
      this.precipitation = "?";
      this.wind = "?";
    }
  }
}
