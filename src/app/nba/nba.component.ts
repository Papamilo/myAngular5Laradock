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

  nbae: Nba[] = NBAE;
  nbaw: Nba[] = NBAW;

  constructor(private nbaService: NbaService) { }


  ngOnInit() {
    this.getNba();
  }

  getNba(): void {
    this.nbaService.getNba()
      .subscribe(nba => {
        this.nbae = nba.nbae;
        this.nbaw = nba.nbaw;
      });
  }


}
