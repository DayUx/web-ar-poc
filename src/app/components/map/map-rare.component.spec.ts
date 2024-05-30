import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRareComponent } from './map-rare.component';

describe('MapComponent', () => {
  let component: MapRareComponent;
  let fixture: ComponentFixture<MapRareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapRareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapRareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
