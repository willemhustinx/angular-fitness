import { Component, OnInit } from '@angular/core';
import {Apparaat} from '../apparaat'
import {APPARATEN} from '../mock-apparaten'

@Component({
  selector: 'app-apparaten',
  templateUrl: './apparaten.component.html',
  styleUrls: ['./apparaten.component.css']
})
export class ApparatenComponent implements OnInit {

  apparaten = APPARATEN;

  selectedApparaat: Apparaat;

  constructor() { }

  ngOnInit() {
  }

  onSelect(apparaat: Apparaat): void {
    this.selectedApparaat = apparaat;
  }

}
