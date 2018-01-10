import { TestBed, inject } from '@angular/core/testing';

import { ApparaatService } from './apparaat.service';

describe('ApparaatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApparaatService]
    });
  });

  it('should be created', inject([ApparaatService], (service: ApparaatService) => {
    expect(service).toBeTruthy();
  }));
});
