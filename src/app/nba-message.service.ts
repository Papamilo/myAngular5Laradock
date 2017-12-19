import { Injectable } from '@angular/core';

@Injectable()
export class NbaMessageService {

  nbaMessages: any[] = [];
  // To be modify with the write type under and bellow too

  add(nbaMessage: any[]) {
    this.nbaMessages.push(nbaMessage);
  }

  clear() {
    this.nbaMessages = [];
  }

  constructor() { }

}
