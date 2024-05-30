import {AfterViewChecked, Component, ElementRef, HostListener, Inject, ViewChild} from '@angular/core';
import {CameraPreview} from '@capacitor-community/camera-preview';
import {NgxOpenCVService} from "../opencv/ngx-open-cv.service";
import {DOCUMENT} from "@angular/common";
import {OpenCVState} from "../opencv/models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
