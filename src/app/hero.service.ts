import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import Hero from './hero'

@Injectable()
export default class HeroService {
  private heroesUrl = 'api/heroes'

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl).toPromise()
      .then(res => res.json().data as Hero[])
      .catch(this.handleError)
  }

  // Simulate a 2 second delay on promise resolution, imagine we're fetching from an actual API on the web
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000)
    })
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  private headers = new Headers({'Content-Type': 'application/json'})

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError)
  }

  create(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError)
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }
}