import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './data/mock-pokemons';
import { Pokemon } from './models/pokemon-model';
import { BorderCardDirective } from './border-card.directive';
import { DatePipe } from '@angular/common';
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], 
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent  {}
