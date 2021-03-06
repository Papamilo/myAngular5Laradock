import { NbaMessageService } from './nba-message.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Nba } from './nba';
import { NBAE } from './mock-nba-est';
import { NBAW } from './mock-nba-west';

@Injectable()
export class NbaService {

  constructor(private nbaMessageService: NbaMessageService) { }

  nbae = NBAE;
  nbaw = NBAW;

  getNba(): Observable<{nbae: Nba[], nbaw: Nba[]}> {
    // Todo: sent the message _after_fetching the heroes
    this.nbaMessageService.add('NbaService: fetched nbae and nbaw !');
    return of({ nbae: NBAE, nbaw: NBAW });
  }

  getNbaes(id: number): Observable<{nbae: Nba[], nbaw: Nba[]}> {
    // Todo: send the message_afer_fetching the hero
    this.nbaMessageService.add(`NbaService: fetched nba id=${id}`);
      this.nbae.find(nba => nba.id === id);
      this.nbaw.find(nba => nba.id === id);
    return of({ nbae: NBAE, nbaw: NBAW });

  }
}
