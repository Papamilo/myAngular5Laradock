import { TestBed, inject } from '@angular/core/testing';

import { NbaMessageService } from './nba-message.service';

describe('NbaMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NbaMessageService]
    });
  });

  it('should be created', inject([NbaMessageService], (service: NbaMessageService) => {
    expect(service).toBeTruthy();
  }));
});
