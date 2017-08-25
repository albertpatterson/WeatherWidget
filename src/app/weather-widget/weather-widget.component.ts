import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  private location: string = "Location";

  private date: string = "8/25/2017";

  private weatherCondition: string = "Sunny";

  private temperature: string = "80 F";

  private precipitation: string = "10%";
  
  private wind: string = "NE 1 mph";

  private view: string = "weather";

  private updateLocation(): void{
    this.view = "location";
  }

  private locationTextChanged(event){
    console.log("value: " + event.target.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
