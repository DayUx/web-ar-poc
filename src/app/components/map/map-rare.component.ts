import { Component } from '@angular/core';
import {LngLatLike, MapMouseEvent} from "maplibre-gl";
import {EventData} from "@maplibre/ngx-maplibre-gl";
import {scan} from "rxjs";
import {Router} from "@angular/router";
import {SpatialUtils} from "../../utils/SpatialUtils";

@Component({
  selector: 'app-map',
  templateUrl: './map-rare.component.html',
  styleUrl: './map-rare.component.scss'
})
export class MapRareComponent {
  center: [number,number] = [48.11, -1.64]
  zoom: [number] = [5]
  markerPosition: [number,number] = [48.11, -1.64]
  coordinates :LngLatLike[]= []
constructor(
  private router:Router
) {
  navigator.geolocation.getCurrentPosition((pos)=>this.updatePosition(pos));
  navigator.geolocation.watchPosition((pos)=>this.updatePosition(pos));
}
updatePosition(position:GeolocationPosition) {
  this.markerPosition = [position.coords.longitude, position.coords.latitude];
  if (SpatialUtils.getDistanceFromLatLonInKm(this.center[1],this.center[0],this.markerPosition[1],this.markerPosition[0])>1) {
    this.center = this.markerPosition;
    this.zoom = [8];

  }
}


  doubleClick($event: MapMouseEvent & EventData) {
   console.log($event)
    this.coordinates.push([
      $event.lngLat.lng,
      $event.lngLat.lat
    ])
  }

  scan(){
    this.router.navigate(['camera'],{
      state:{
        coordinates : this.coordinates
      }
    })
  }
}
