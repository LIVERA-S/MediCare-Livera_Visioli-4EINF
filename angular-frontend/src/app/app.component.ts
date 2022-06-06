import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Observable } from 'rxjs';
import { flaskLink } from './flaskLink';
import { ChartData, Medic } from './medic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  linkFlask = flaskLink.getUrl();

  dataFrame: Observable<Medic[]>| undefined;
  dati:Medic[] = undefined!;

  dataFrame1: Observable<Medic[]>| undefined;
  dati1:Medic[] = undefined!;
  

   /* Grafico */
   Chart: Observable<ChartData[]>| undefined;
   chartDati:any[] = undefined!;
  /* Grafico */

  constructor(private http: HttpClient){
  }
   /* Grafico */
  ngOnInit(): void {
   this.Chart = this.http.get<ChartData[]>(this.linkFlask + "/chart");
   this.Chart.subscribe(this.grafico)
  }
  grafico = (dati: ChartData[]) => {
    this.chartDati = [];
    console.log(dati);
      dati.forEach(
      (value : ChartData) =>
      {
        /*if (value.LONG_X_4326) > 9.190578;*/
          this.chartDati.push([value._id,value.total])
      }
    )
  }

  myType = ChartType.PieChart;
  
  width= 750;
  height = 550;

  ChartVector= [];
  
 
  /* Grafico */

  fati = (data: Medic[]) => {
    this.dati = data;
    console.log(data);
  }

  ciao = (datan: Medic[]) => {
    this.dati1 = datan;
    console.log(datan);
  }
  find(medico : HTMLInputElement){
   let m = medico.value;
   this.dataFrame = this.http.get<Medic[]>(this.linkFlask + "/medic/" + m);
   this.dataFrame.subscribe(this.fati)
  }

  findd(nil : HTMLInputElement){
    let n = nil.value;
    this.dataFrame1 = this.http.get<Medic[]>(this.linkFlask + "/nil/" + n);
    this.dataFrame1.subscribe(this.ciao)
   }
}
