import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


const weatherURLprefix = "weather?coords=";
function getWeatherURL(coords): string{
  return weatherURLprefix + coords;
}

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  public getWeatherData(coords: string): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.get(getWeatherURL(coords))
      .subscribe((response:Response)=>resolve(response.json()));
    })
  }
}
