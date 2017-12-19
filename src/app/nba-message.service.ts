import { Injectable } from '@angular/core';

@Injectable()
export class NbaMessageService {

  nbaMessages: string[] = [];

  add(nbaMessage: string) {
    this.nbaMessages.push(nbaMessage);
  }

  clear() {
    this.nbaMessages = [];
  }

  constructor() { }

}
