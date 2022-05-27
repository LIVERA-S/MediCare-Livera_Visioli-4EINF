import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { map } from 'rxjs';
import { flaskLink } from './flaskLink';


@Injectable({
  providedIn: 'root'
})

export class MarkerService {
  baseUrl : string = flaskLink._API+"map"
  constructor(private http: HttpClient) { 
    
  }
  
   makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res: any) => {
      for (const c of res) {
        console.log(c.Coordinates.lat)
        const lon = c.Coordinates.lng;
        const lat = c.Coordinates.lat;
        const adress = c.Coordinates.adress;
        const medico = c.Coordinates.medico;
        const marker = L.marker([lat, lon]);

        marker.addTo(map).bindPopup("Name: " + medico +'<br/>'+ "Adress: " + adress);
        
      }
    })
   }
}