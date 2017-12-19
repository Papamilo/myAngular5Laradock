import { NbaMessageService } from './../nba-message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-messages',
  templateUrl: './nba-messages.component.html',
  styleUrls: ['./nba-messages.component.css']
})
export class NbaMessagesComponent implements OnInit {

  constructor(public nbaMessageService: NbaMessageService) { }

  ngOnInit() {
  }

}
