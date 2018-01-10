import { Component, OnInit } from '@angular/core';
import {Apparaat} from '../apparaat';
import { ApparaatService } from '../apparaat.service';

@Component({
  selector: 'app-apparaten',
  templateUrl: './apparaten.component.html',
  styleUrls: ['./apparaten.component.css']
})
export class ApparatenComponent implements OnInit {

  selectedApparaat: Apparaat;

  apparaten: Apparaat[];

  constructor(private apparaatService: ApparaatService) { }

  ngOnInit() {
    this.getApparaten();
  }

  onSelect(apparaat: Apparaat): void {
    this.selectedApparaat = apparaat;
  }

  getApparaten(): void {
    this.apparaatService.getApparaten()
    .subscribe(apparaten => this.apparaten = apparaten);
  }

}
