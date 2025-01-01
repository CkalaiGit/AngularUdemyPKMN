import { Routes } from '@angular/router';
import { ListPokemeonComponent } from './list-pokemeon/list-pokemeon.component';
import { DetailPokemeonComponent } from './detail-pokemeon/detail-pokemeon.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';

export const routes: Routes = [
    {path: 'pokemons', component: ListPokemeonComponent},
    {path: 'pokemon/:id', component: DetailPokemeonComponent},
    {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
    {path: '**', component: NotFound404Component}
];
