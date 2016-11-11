import { Component, Input } from '@angular/core';
import { Hero } from '../../../interfaces/hero';

@Component({
  selector: 'my-hero-details',
  template: require('./hero-details.tmpl.html')
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
  constructor() {
    this.hero = null;
  }
}