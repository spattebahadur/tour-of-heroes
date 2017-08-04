import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Hero} from './hero'
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService{

  constructor(private http:Http){

  }

  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES)
  }
  private heroesUrl='/heroes.json';

  /* getHeroes(): Promise<Hero[]>{
   return this.http.get(this.heroesUrl).toPromise()
   .then(res=>res.json().data as Hero[])
   .catch(this.handleError)
   }*/

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }


  /*getHero(id: number): Promise<Hero> {
   // const url = `${this.heroesUrl}/${id}`;
   return this.getHeroes()
   .toPromise()
   .then(heroes => heroes.find(hero => hero.id === id))
   .catch(this.handleError)
   }*/


  update(hero:Hero){
    console.log(hero['id']);
    let id=+hero['id'];
    /*hero = this.getHero(id);*/
    console.log(hero)
    this.getHeroes().then((heroes:Hero[])=>{
        for(let i=0;i<heroes.length;i++){
          if(heroes[i].id===id){
            console.log("YES")
            heroes[i].name=hero.name;
          }
        }
      }

    )
  }

//add new Hero
  create(name:String):void {
    console.log("ADD" + name);
     this.getHeroes().then((heroes:Hero[])=>{
      let lastIndex = heroes.length>0?heroes[heroes.length-1].id:0;
      /* hero:Hero = {
        'id' : lastIndex + 1,
        'name' : name
      }*/
       let hero:Hero = new Hero();
       hero.id=lastIndex + 1;
       hero.name = name;
      heroes.push(hero);
    })

  }


  remove(hero:Hero):boolean{
   let isDeleted:boolean = false;
     this.getHeroes().then((heroes:Hero[])=>{
      let index=0;
      for(let i=0;i<heroes.length;i++){
        if(heroes[i].id===hero.id){
          index = heroes.indexOf(heroes[i]);
        }
      }
      if(index>-1){
         heroes.splice(index,1);
        isDeleted = true;
      }
    })
    return isDeleted;
  }


  search(term:String):Hero[]{
     let filterHeroes:Hero[]=[];

    console.log("Search Service")
    this.getHeroes().then((heroes:Hero[])=>{
      let index = 0;
      for(let i=0;i<heroes.length;i++){
        if(heroes[i].name.indexOf(term)!=-1){

         filterHeroes[index]=heroes[i];
          index++;
        }
      }
    })
    if(filterHeroes.length>0){
    return filterHeroes;
    }

  }

}
