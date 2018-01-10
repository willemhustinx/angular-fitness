import { Component, OnInit, Input } from '@angular/core';
import { Apparaat } from '../apparaat';

@Component({
  selector: 'app-apparaat-detail',
  templateUrl: './apparaat-detail.component.html',
  styleUrls: ['./apparaat-detail.component.css']
})
export class ApparaatDetailComponent implements OnInit {

  @Input() apparaat: Apparaat;

  constructor() { }

  ngOnInit() {
  }

}
