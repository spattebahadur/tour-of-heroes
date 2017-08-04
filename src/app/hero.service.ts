import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';


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


  /*update(hero:Hero){
    id:number;
    id=+hero.id;
    this.getHero(id)
  }*/

}
