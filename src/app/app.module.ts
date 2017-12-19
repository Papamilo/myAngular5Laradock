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
import { NbaMessagesComponent } from './nba-messages/nba-messages.component';
import { NbaMessageService } from './nba-message.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NbaComponent,
    HeroDetailComponent,
    NbaDetailComponent,
    MessagesComponent,
    NbaMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService, MessageService, NbaService, NbaMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
