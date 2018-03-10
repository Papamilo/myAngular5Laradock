import { RouterModule } from '@angular/router'; // <-- RouterModule lives here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NbaComponent } from './nba/nba.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NbaDetailComponent } from './nba-detail/nba-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { NbaService } from './nba.service';
import { NbaTeamService } from './nba-team.service';

import { NbaMessagesComponent } from './nba-messages/nba-messages.component';
import { NbaMessageService } from './nba-message.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './/app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NbaComponent,
    HeroDetailComponent,
    NbaDetailComponent,
    MessagesComponent,
    NbaMessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [HeroService, MessageService, NbaService, NbaMessageService, NbaTeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
