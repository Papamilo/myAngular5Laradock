import { Component, OnInit } from '@angular/core';
import { Nba } from '../nba';
import { NBAE } from '../mock-nba-est';
import { NBAW } from '../mock-nba-west';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {

  nbae = NBAE;
  nbaw = NBAW;

  selectedTeam: Nba;

  constructor() { }

  ngOnInit() {
  }

  onSelect(nba: Nba): void {
    this.selectedTeam = nba;
    // this.selectedTeam = nbaw;
  }

}
