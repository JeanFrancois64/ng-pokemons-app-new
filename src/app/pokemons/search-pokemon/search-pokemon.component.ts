import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject  } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;
  
  constructor(
    private _pokemonService: PokemonsService,
    private router: Router) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.pokemons$ = this.searchTerms.pipe(
      // delai 300ms entre chaque requete
      debounceTime(300),
      // ignaurer la recherche en si c'est la même que la précédente
      distinctUntilChanged(),
      // retourner la liste des résultats
      switchMap((term: string) => this._pokemonService.searchPokemons(term))
    );
  }

  goDetail(pokemon: Pokemon) {
    this.router.navigate(['pokemon',pokemon.id]);
  }
}
