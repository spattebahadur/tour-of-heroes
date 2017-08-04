import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { HeroService } from './hero.service';

export class Hero{
  id:number;
  name:string;
}



@Component({
  selector: 'my-heroes',
  providers:[HeroService],
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero:Hero;

  constructor(private heroService:HeroService,private router:Router){

  }
  ngOnInit():void{
     this.getHeroes();
  }

  getHeroes(): void {
     this.heroService.getHeroes().then(heroes=>this.heroes = heroes);
  }

  showHero(hero:Hero):void{
    this.selectedHero=hero;
  }

  gotoDetail():void{
    this.router.navigate(['detail',this.selectedHero.id]);
  }
}

