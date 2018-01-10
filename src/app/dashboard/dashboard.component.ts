import { Component, OnInit } from '@angular/core';
import { Apparaat } from '../apparaat';
import { ApparaatService } from '../apparaat.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  apparaten: Apparaat[] = [];
 
  constructor(private apparaatService: ApparaatService) { }
 
  ngOnInit() {
    this.getApparaten();
  }
 
  getApparaten(): void {
    this.apparaatService.getApparaten()
    .subscribe(apparaten => this.apparaten = apparaten);
  }
}