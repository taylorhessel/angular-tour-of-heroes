import { Injectable } from '@angular/core'
import Hero from './hero'
import { HEROES } from './mock-heroes'

@Injectable()
export default class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES)
  }

  // Simulate a 2 second delay on promise resolution, imagine we're fetching from an actual API
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000)
    })
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id))
  }
}
