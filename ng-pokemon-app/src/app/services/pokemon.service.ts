import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon-model';

const POKEMON_TYPES = [
  'Normal', 'Feu', 'Eau', 'Électrique', 'Plante', 'Glace', 'Combat',
  'Poison', 'Sol', 'Vol', 'Psy', 'Insecte', 'Roche', 'Spectre',
  'Dragon', 'Ténèbres', 'Acier', 'Fée'
];

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'api/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl).pipe(
      tap(response => console.log('Response from API:', response)),
      catchError(this.handleError<Pokemon[]>('getPokemonList', []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${pokemonId}`).pipe(
      tap(response => console.log(response)),
      catchError(this.handleError<Pokemon>(`getPokemonById id=${pokemonId}`))
    );
  }

  addPokemon(pokemon: Pokemon) : Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<Pokemon>(this.apiUrl, pokemon, httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError(this.handleError<Pokemon>('addPokemon'))
    )
  }
  

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> | undefined {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put<Pokemon>(this.apiUrl, pokemon, httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError(this.handleError<Pokemon>('updatePokemon'))
    )
  }


  deletePokemonById(pokemonId: number): Observable<void | Pokemon> {
    return this.http.delete<void>(`${this.apiUrl}/${pokemonId}`).pipe(
      tap((pokemon) => console.log(`Deleted Pokemon with ID: ${pokemonId}`, pokemon)),
      catchError(this.handleError<Pokemon>('deletePokemonById'))
    );
  }



  getPokemonTypeList(): string[] {
    return POKEMON_TYPES;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Error): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
