import { Injectable } from '@angular/core';

@Injectable()
export class NbaMessageService {

  nbaMessages: string[] = [];
  // To be modify with the right type under and bellow too

  add(nbaMessage: String[]) {
    this.nbaMessages.push(nbaMessage);
  }

  clear() {
    this.nbaMessages = [];
  }

  constructor() { }

}
