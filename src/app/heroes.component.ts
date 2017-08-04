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

  add(name:String){
    if (!name) { return; }
    this.heroService.create(name);
  }

  delete(hero:Hero):void{
  console.log("delete ")
    let isDeleted = this.heroService.remove(hero);
   /* console.log("YESSSSS11"+isDeleted);
    console.log("YESSSSS222"+this.selectedHero.id===hero.id);*/
    if(isDeleted && this.selectedHero.id===hero.id){
      console.log("YESSSSS")
      this.selectedHero=null;
    }

  }
}

