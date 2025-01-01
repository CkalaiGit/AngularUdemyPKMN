import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon-model';
import { POKEMONS } from '../data/mock-pokemons';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { DatePipe } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemeon',
  standalone: true,
  imports: [BorderCardDirective, DatePipe, PokemonTypeColorPipe],
  templateUrl: './list-pokemeon.component.html',
  styles: ``
})
export class ListPokemeonComponent {
  pokemeonList: Array<Pokemon> = POKEMONS;

  constructor(private router: Router) { }


  go2Pkmn(pokemon: Pokemon) {
    this.router.navigate(['/pokemon/' + pokemon.id]);
  }
}