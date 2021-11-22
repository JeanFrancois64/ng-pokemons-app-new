import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonsService {
    private pokemonsUrl = 'api/pokemons';
    
    constructor(private http: HttpClient) { }

    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl);
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.pokemonsUrl}/${id}`);
    }

    // Retourne le pokémon modifié
    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-type': 'application/json'})
        }
        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions);
    }

    // Supprime le pokémon dont l'id est en param
    /*deletePokemon2(pokemonId: number): Observable<unknown> {
        return this.http.delete(`${this.pokemonsUrl}/${pokemonId}`);
    }*/
    
    // Supprime et retourne le pokémon dont l'id est en param
    deletePokemon(pokemonId: number): Observable<Pokemon> {
        return this.http.delete<Pokemon>(`${this.pokemonsUrl}/${pokemonId}`);
    }

    searchPokemons(term: string): Observable<Pokemon[]> {
        let httpParams = new HttpParams();
        httpParams = httpParams.set('name', term);
        if(!term.trim()){
            return of([]);
        }
        //return this.http.get<Pokemon[]>(`${this.pokemonsUrl}?name=${term}`);
        return this.http.get<Pokemon[]>(`${this.pokemonsUrl}`,{params: httpParams});
    }

    // Retourne la liste des types des Pokémons
    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }
}