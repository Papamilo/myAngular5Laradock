import { Component, OnInit, Input } from '@angular/core';
import { Nba } from '../nba';

@Component({
  selector: 'app-nba-detail',
  templateUrl: './nba-detail.component.html',
  styleUrls: ['./nba-detail.component.css']
})
export class NbaDetailComponent implements OnInit {

  constructor() { }

  @Input() nba: Nba;

  ngOnInit() {
  }

}
