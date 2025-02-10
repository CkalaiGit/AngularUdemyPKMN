import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon-model';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { CommonModule, DatePipe } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { Router, RouterModule } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-list-pokemeon',
  standalone: true,
  imports: [BorderCardDirective, DatePipe, PokemonTypeColorPipe, CommonModule, RouterModule],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemeonComponent implements OnInit {

  pokemonList: Pokemon[] | undefined;

  constructor(private router: Router, private pokemonService: PokemonService) { }
  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(
      pokemonList => this.pokemonList = pokemonList
    )
  }

  go2Pkmn(pokemon: Pokemon) {
    this.router.navigate(['/pokemon/' + pokemon.id]);
  }
}