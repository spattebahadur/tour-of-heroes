/**
 * Created by surendra on 4/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-search',
  providers:[HeroService],
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})

export class HeroSearchComponent{

 heroes:Hero[]=[];
  constructor(private heroService:HeroService){

}

  search(term:String){
    console.log("Search")
    this.heroes=this.heroService.search(term);

  }

}
