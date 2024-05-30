import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {SpatialUtils} from "../../utils/SpatialUtils";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.scss'
})
export class CameraComponent {
  first:boolean = false;
  _mycoords:GeolocationPosition;

  set mycoords(value:GeolocationPosition) {
    this._mycoords = value;
    this.distances = this.coordinates.map((coordinate)=>SpatialUtils.getDistanceFromLatLonInKm(value.coords.latitude,value.coords.longitude,coordinate[1],coordinate[0]))

  }

  get mycoords() {
    return this._mycoords
  }



  distances:number[] = []
  @ViewChild('scene')
  set scene(value: ElementRef) {
    this._scene = value;
    this.coordinates.forEach((coordinate) => {
    let latitude = coordinate[1];

      let longitude = coordinate[0];
    this.appendEntity(latitude,longitude)
  });


    navigator.geolocation.getCurrentPosition((position) => {
      this.mycoords = position
    });
    navigator.geolocation.watchPosition((position) => {
      this.mycoords = position
    });
  }
  coordinates :[number,number][]= []
  private _scene:ElementRef;


  constructor(
    private router:Router
  ) {
    this.coordinates = this.router.getCurrentNavigation().extras.state['coordinates']
    console.log(this.coordinates)



  }



  appendEntity(latitude: number, longitude: number){
    let model = document.createElement('a-entity');
    model.setAttribute('gps-new-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
    model.setAttribute('geometry', 'primitive: box');
    model.setAttribute('material', 'color: red');
    model.setAttribute('scale', '1 1 1');
    this._scene.nativeElement.appendChild(model);
  }

}
