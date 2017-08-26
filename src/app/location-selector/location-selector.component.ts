import { Component, OnInit, EventEmitter } from '@angular/core';

import { LocationService } from "../services/location.service";

@Component({
  selector: 'location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.css'],
  outputs: ["selectLocation"]
})
export class LocationSelectorComponent implements OnInit {

  public selectLocation: EventEmitter<string> = new EventEmitter();

  private namesAndCoords: any[];
  private names: string[];

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  private locationTextChanged(event){
    let query = event.target.value;
    this.locationService.filterLocations(query)
    .then(namesAndCoords => {
      this.namesAndCoords = namesAndCoords
      this.names = this.namesAndCoords.map(d=>d.name);  
    })
  }

  private doSelectLocation(event){
    let index = event.target.value;
    this.selectLocation.next(this.namesAndCoords[index]);
  }
}
