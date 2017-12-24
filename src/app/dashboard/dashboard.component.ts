import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Nba } from '../nba';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  nbaw: Nba[] = [];
  nbae: Nba[] = [];

  constructor(private heroService: HeroService, private nbaService: NbaService) { }

  ngOnInit() {
    this.getHeroes();
    this.getNba();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getNba(): void {
    this.nbaService.getNba()
      .subscribe(nba => {
        this.nbae = nba.nbae.slice(1, 8);
        this.nbaw = nba.nbaw.slice(1, 8);
      });
  }
}
