import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// Components should NOT fetch or save data directly, they should focus on presenting data and delegate data access to a service.

@Component({
  // The selector matches the name of the HTML element that identifies this component within a parent component's template
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { /**/ }

  // Angular calls ngOnInit shortly after the component is created
  // ^ This is a good place to put initialization logic
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this .heroes = heroes);
  }

}
