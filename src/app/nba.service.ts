import { Injectable } from '@angular/core';
import { Nba } from './nba';
import { NBAE } from './mock-nba-est';
import { NBAW } from './mock-nba-west';

@Injectable()
export class NbaService {

  constructor() { }

  getNba(): Nba[] {
    return NBAE && NBAW;
  }
}
