import { Component, OnInit, Input } from '@angular/core';
import { Nba } from '../nba';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-nba-detail',
  templateUrl: './nba-detail.component.html',
  styleUrls: ['./nba-detail.component.css']
})
export class NbaDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private nbaService: NbaService,
    private location: Location
  ) { }

  @Input() nba: Nba[];

  ngOnInit() {
    this.getNbaes();
    console.log(this.nba);
  }

  getNbaes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.nbaService.getNbaes(id)
      .subscribe(nba =>  {
        this.nba = nba.nbae;
        this.nba = nba.nbaw;
      });
  }
/*
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  */

  goBack(): void {
    this.location.back();
  }

}
