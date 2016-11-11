import { Component, OnInit} from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template: require('./heroes.tmpl.html'),
  styles: [`${require('./heroes.css')}`],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title: string;
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
    this.selectedHero = undefined;
  }

  ngOnInit() : void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => {
        this.heroes = heroes;
      });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
