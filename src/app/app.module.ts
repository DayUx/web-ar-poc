import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxOpenCVModule} from "../opencv/ngx-opencv.module";
import {OpenCVConfig} from "../opencv/models";
import { MapRareComponent } from './components/map/map-rare.component';
import { CameraComponent } from './components/camera/camera.component';
import {ImageComponent, LayerComponent, MapComponent, MarkerComponent} from "@maplibre/ngx-maplibre-gl";

const openCVConfig: OpenCVConfig = {
  openCVDirPath: 'assets/opencv',
};
@NgModule({
  declarations: [
    AppComponent,
    MapRareComponent,
    CameraComponent,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOpenCVModule.forRoot(openCVConfig),
    MapComponent,
    ImageComponent,
    LayerComponent,
    MarkerComponent,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
