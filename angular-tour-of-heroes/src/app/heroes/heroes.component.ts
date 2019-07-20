import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

@Component({
  // The selector matches the name of the HTML element that identifies this component within a parent component's template
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  constructor() { }

  // Angular calls ngOnInit shortly after the component is created
  // ^ This is a good place to put initialization logic
  ngOnInit() {/**/}

}
