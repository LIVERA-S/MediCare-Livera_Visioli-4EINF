import { Component, Input, OnInit } from '@angular/core';
import { Medic } from '../medic.model';

@Component({
  selector: 'app-inputcomp',
  templateUrl: './inputcomp.component.html',
  styleUrls: ['./inputcomp.component.css']
})
export class InputcompComponent implements OnInit {
  @Input() listaDati : Medic[]  = undefined!;
  constructor() { }

  ngOnInit(): void {
  }

}
