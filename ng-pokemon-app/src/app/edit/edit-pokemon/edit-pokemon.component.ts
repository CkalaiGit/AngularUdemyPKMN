import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon-model';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonFormsComponent } from "../../forms/pokemon-forms/pokemon-forms.component";

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [PokemonFormsComponent],
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.css'
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe(
        pokemon => this.pokemon = pokemon
      )
    }

  }
}
