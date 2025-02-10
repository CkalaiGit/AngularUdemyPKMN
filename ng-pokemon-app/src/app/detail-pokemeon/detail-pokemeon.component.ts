import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../models/pokemon-model';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { DatePipe } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [PokemonTypeColorPipe, DatePipe],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent implements OnInit {


  pokemonId: number | null | undefined;
  currentPokemon: Pokemon | undefined;
  pokemon: Pokemon | undefined;

  constructor(private currentRoute: ActivatedRoute, private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const pokemonId = this.currentRoute.snapshot.paramMap.get('id');
    if (pokemonId) {
        this.pokemonService.getPokemonById(+pokemonId).subscribe(
          pokemon => this.pokemon = pokemon
      )
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id!).subscribe(
      () => this.goBack()
    )
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }

  go2EditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon/', pokemon.id]);
  }



}
