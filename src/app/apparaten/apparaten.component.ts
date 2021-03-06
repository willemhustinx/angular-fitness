import { Component, OnInit } from '@angular/core';
import {Apparaat} from '../apparaat';
import { ApparaatService } from '../apparaat.service';

@Component({
  selector: 'app-apparaten',
  templateUrl: './apparaten.component.html',
  styleUrls: ['./apparaten.component.css']
})
export class ApparatenComponent implements OnInit {

  apparaten: Apparaat[];

  constructor(private apparaatService: ApparaatService) { }

  ngOnInit() {
    this.getApparaten();
  }

  getApparaten(): void {
    this.apparaatService.getApparaten()
    .subscribe(apparaten => this.apparaten = apparaten);
  }

}
