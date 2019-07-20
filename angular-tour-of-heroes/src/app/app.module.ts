import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

// Angular needs to know how the pieces of our app fit together and what other files and libraries the app requires <- this information is called metadata
// Some of the metadata is in the @Component decorators that we added to our component class. Other critical metadata is in the @NgModule decorators
// ^ The most important @NgModule decorator annotates the top level AppModule class

// Every component MUST be declared in EXACTLY ONE NgModule

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
