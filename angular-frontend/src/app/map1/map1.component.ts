import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.css']
})
export class Map1Component implements OnInit {
  private map1 : any;
  
  initMap1(): void {
    this.map1 = L.map('map1', {
      center: [ 45.4773, 9.1815 ],
      zoom: 10
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map1);
  }

  constructor(private markerServicee: MarkerService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    this.initMap1();
    this.markerServicee.makeCapitalMarkerss(this.map1);
    
  }
  
}
