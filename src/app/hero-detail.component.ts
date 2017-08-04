import {Component , Input,OnInit} from '@angular/core';
// Keep the Input import for now, you'll remove it later:
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{

  @Input() hero:Hero;

  constructor(private route:ActivatedRoute, private location : Location,private heroService:HeroService,private router:Router){

  }

  ngOnInit():void{
    console.log("inside hero details");
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);


  }

  goBack(): void {
    this.location.back();
  }

  save(hero:Hero){
    this.heroService.update(hero)
   // this.router.navigate(['dashboard']);
    this.location.back();
  }

}
