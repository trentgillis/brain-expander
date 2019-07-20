import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { MessageService } from './message.service';

// Services are a great way to share information among classes that don't know each other
// Removing data access from components means you can change your mind about the implementation anytime without touching any components

// Like the component decorator, the Injectable decorator takes a metadata object
// Before Angular can inject this service into components we have to ensure that we register a provider for the service
@Injectable({
  // The below code provides this service at the root level
  // ^ This results in Angular creating a single shared instance of HeroService and injects it into any class that asks for it
  providedIn: 'root'
})
export class HeroService {

  // The below is a typical service-in-service scenario
  // ^ We inject the MessageService into the HeroService which is injected into the HeroesComponent
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
