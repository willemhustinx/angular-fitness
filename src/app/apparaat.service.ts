import { Injectable } from '@angular/core';
import { Apparaat } from './apparaat';
import { APPARATEN } from './mock-apparaten';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {  MessageService } from './message.service';

@Injectable()
export class ApparaatService {

  getApparaten(): Observable<Apparaat[]> {
    // Todo: send the message _after_ fetching the apparaten
    this.messageService.add('ApparatenService: fetched apparaten');
    return of(APPARATEN);
  }

  constructor(private messageService: MessageService) { }

}
