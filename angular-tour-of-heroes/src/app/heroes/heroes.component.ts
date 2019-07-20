import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';
import { Hero } from '../hero';

@Component({
  // The selector matches the name of the HTML element that identifies this component within a parent component's template
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  // Angular calls ngOnInit shortly after the component is created
  // ^ This is a good place to put initialization logic
  ngOnInit() {/**/}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
