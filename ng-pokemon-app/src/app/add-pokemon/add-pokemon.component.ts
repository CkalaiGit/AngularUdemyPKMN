import { Component, OnInit } from '@angular/core';
import { PokemonFormsComponent } from "../forms/pokemon-forms/pokemon-forms.component";
import { Pokemon } from '../models/pokemon-model';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [PokemonFormsComponent],
  templateUrl: './add-pokemon.component.html',
})
export class AddPokemonComponent implements OnInit {

pokemon: Pokemon | undefined;

ngOnInit(): void {
  this.pokemon = new Pokemon();
}

}
