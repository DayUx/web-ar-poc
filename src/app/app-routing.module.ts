import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapRareComponent} from "./components/map/map-rare.component";
import {CameraComponent} from "./components/camera/camera.component";

const routes: Routes = [
 {
    path: 'map',
    component: MapRareComponent
  }, {
    path: 'camera',
    component: CameraComponent
  }, {
    path: '**',
    redirectTo:'map'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
