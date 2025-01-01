import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../models/pokemon-model';
import { POKEMONS } from '../data/mock-pokemons';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-pokemeon',
  standalone: true,
  imports: [PokemonTypeColorPipe, DatePipe],
  templateUrl: './detail-pokemeon.component.html',
  styles: ``
})
export class DetailPokemeonComponent  implements OnInit {

  
  pokemonId: number | null | undefined;
  pokemenList: Pokemon[] | undefined;
  currentPokemon: Pokemon | undefined;
  pokemon: Pokemon| undefined;

  constructor(private currentRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemenList = POKEMONS;
    const pokemonIdString = this.currentRoute.snapshot.paramMap.get('id'); 
    this.pokemonId = pokemonIdString ? +pokemonIdString : null; 
    this.pokemon  = this.pokemenList.find(pkmn => this.pokemonId === pkmn.id);

  }

  goBack() {
     this.router.navigate(['/pokemons']);
    }



}
