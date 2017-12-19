import { NbaService } from './../nba.service';
import { Component, OnInit } from '@angular/core';
import { Nba } from '../nba';
import { NBAE } from '../mock-nba-est';
import { NBAW } from '../mock-nba-west';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {

  nbae = NBAE;
  nbaw = NBAW;

  selectedTeam: Nba;

  constructor(private nbaService: NbaService) { }


  ngOnInit() {
    this.getNba();
  }


  onSelect(nbae: Nba, nbaw: Nba): void {
    this.selectedTeam = nbaw;
    this.selectedTeam = nbae;
  }

  getNba(): void {
    this.nbaService.getNba()
      .subscribe(nba => {
        this.nbae = nba.nbae;
        this.nbaw = nba.nbaw;
      });
  }


}
