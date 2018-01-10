import { Component, OnInit, Input } from '@angular/core';
import { Apparaat } from '../apparaat';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApparaatService }  from '../apparaat.service';

@Component({
  selector: 'app-apparaat-detail',
  templateUrl: './apparaat-detail.component.html',
  styleUrls: ['./apparaat-detail.component.css']
})
export class ApparaatDetailComponent implements OnInit {

  @Input() apparaat: Apparaat;

  constructor(
    private route: ActivatedRoute,
    private apparaatService: ApparaatService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getApparaat();
  }
  
  getApparaat(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apparaatService.getApparaat(id)
      .subscribe(apparaat => this.apparaat = apparaat);
  }

  goBack(): void {
    this.location.back();
  }

}
