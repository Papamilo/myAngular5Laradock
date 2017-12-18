import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NbaComponent } from './nba/nba.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NbaDetailComponent } from './nba-detail/nba-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { NbaService } from './nba.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NbaComponent,
    HeroDetailComponent,
    NbaDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService, MessageService, NbaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
