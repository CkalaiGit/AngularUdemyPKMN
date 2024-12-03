import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './data/mock-pokemons';
import { Pokemon } from './models/pokemon-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Liste de Pokémons :</h1>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.table(this.pokemeonList);
    this.selectPokemon(this.pokemeonList[0]);
  }

  pokemeonList: Array<Pokemon> = POKEMONS;

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }


}