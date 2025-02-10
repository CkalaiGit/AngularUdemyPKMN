import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon-model';
import { PokemonTypeColorPipe } from "../../pokemon-type-color.pipe";
import { Router } from '@angular/router';


const urlPicture = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png';

@Component({
  selector: 'app-pokemon-forms',
  standalone: true,
  imports: [ReactiveFormsModule, PokemonTypeColorPipe],
  templateUrl: './pokemon-forms.component.html',
  styleUrls: ['./pokemon-forms.component.css']
})
export class PokemonFormsComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  types: string[] = [];
  pokemonForm: FormGroup;
  isAddForm: boolean | undefined;


  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.pokemonForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9àéèç]{1,25}$')]],
      picture: [urlPicture, [Validators.required]],
      hp: ['', [Validators.required, Validators.pattern('^[0-9]{1,3}$')]],
      cp: ['', [Validators.required, Validators.pattern('^[0-9]{1,2}$')]],
      types: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
    this.types = this.pokemonService.getPokemonTypeList();
    if (this.pokemon) {
      this.pokemonForm.patchValue({
        name: this.pokemon.name,
        hp: this.pokemon.hp,
        cp: this.pokemon.cp
      });
      this.pokemon.types!.forEach(type => this.addType(type));
    }
  }

  addType(type: string) {
    const types = this.pokemonForm.get('types') as FormArray;
    types.push(this.fb.control(type));
  }

  removeType(type: string) {
    const types = this.pokemonForm.get('types') as FormArray;
    const index = types.controls.findIndex(c => c.value === type);
    if (index !== -1) {
      types.removeAt(index);
    }
  }

  hasType(type: string): boolean {
    return this.pokemonForm.get('types')?.value.includes(type) || false;
  }

  selectType(event: Event, type: string) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.addType(type);
    } else {
      this.removeType(type);
    }
  }

  onSubmit() {

    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.createPokemonFromForm(this.pokemonForm.value))?.subscribe(
        (pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id])
      )

    } else if (this.pokemonForm.valid) {
      const updatedPokemon: Pokemon = { ...this.pokemon, ...this.pokemonForm.value };
      console.log("Submit form !", updatedPokemon);
      this.pokemonService.updatePokemon(updatedPokemon)?.subscribe(() => this.router.navigate(['/pokemon', updatedPokemon.id])

      )
    }
  }

  isTypesValid(): boolean {
    const typeCount = this.pokemonForm.controls['types'].value.length || 0;
    if (typeCount < 1 || typeCount > 2) { return false; }
    return true;
  }

  createPokemonFromForm(formValues: {
    name: string;
    hp: number;
    cp: number;
    picture: string;
    types: string[];
  }): Pokemon {
    const { name, hp, cp, picture, types } = formValues;
    return new Pokemon(name, hp, cp, picture, types);
  }


}
