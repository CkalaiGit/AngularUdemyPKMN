import { Routes } from '@angular/router';
import { ListPokemeonComponent } from './list-pokemeon/list-pokemeon.component';
import { DetailPokemonComponent } from './detail-pokemeon/detail-pokemeon.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { EditPokemonComponent } from './edit/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

export const routes: Routes = [
    {path: 'edit/pokemon/:id', component: EditPokemonComponent},
    {path: 'pokemons', component: ListPokemeonComponent},
    {path: 'pokemon/:id', component: DetailPokemonComponent},
    {path: 'add/pokemon', component: AddPokemonComponent},
    {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
    {path: '**', component: NotFound404Component}
];
