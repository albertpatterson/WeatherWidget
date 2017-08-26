import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const locationURLprefix = "location?city=";
function getLoctionURL(cityQuery, limit): string{
  let url = locationURLprefix + cityQuery;

  if(limit){
    url+="&limit="+limit;
  }

  return url;
}

@Injectable()
export class LocationService {

  constructor(private http: Http) { }
  
  public filterLocations(query: string): Promise<any>{

  let locationQueryURL = getLoctionURL(query, 10);

    return new Promise((res, rej)=>{
      this.http.get(locationQueryURL)
      .subscribe((response: Response)=>{
        res(response.json());
      })
    })
  }
}
