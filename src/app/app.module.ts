import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule , Routes }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroService }  from './hero.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,InMemoryWebApiModule.forRoot(InMemoryDataService),HttpModule],
  declarations: [ AppComponent,DashboardComponent,HeroesComponent,HeroDetailComponent,HeroSearchComponent ],
  providers:[HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
