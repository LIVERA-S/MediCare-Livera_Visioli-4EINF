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
  baseUrl1 : string =""
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

   /*INPUT MAP*/
   makeCapitalMarkerss(mapp: L.Map): void {
    this.http.get(this.baseUrl +"map/nil/").subscribe((resn: any) => {
      for (const i of resn) {
        console.log(i.Coordinates.lat)
        const lon = i.Coordinates.lng;
        const lat = i.Coordinates.lat;
        const adress = i.Coordinates.adress;
        const medico = i.Coordinates.medico;
        const marker = L.marker([lat, lon]);

        marker.addTo(mapp).bindPopup("Name: " + medico +'<br/>'+ "Adress: " + adress);
        
      }
    })
   }
}