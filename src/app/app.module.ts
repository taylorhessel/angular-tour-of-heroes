import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes.component'
import DashboardComponent from './dashboard.component'
import HeroDetailComponent from './hero-detail.component'
import HeroService from './hero.service'
import HeroSearchComponent from './hero-search.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})

export class AppModule { }
