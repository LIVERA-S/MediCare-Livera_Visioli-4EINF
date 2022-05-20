import { Component, Input, OnInit } from '@angular/core';
import { Medic } from '../medic.model';

@Component({
  selector: 'app-inputcomp2',
  templateUrl: './inputcomp2.component.html',
  styleUrls: ['./inputcomp2.component.css']
})
export class Inputcomp2Component implements OnInit {
  @Input() listaNil : Medic[]  = undefined!;
  constructor() { }

  ngOnInit(): void {
  }

}
