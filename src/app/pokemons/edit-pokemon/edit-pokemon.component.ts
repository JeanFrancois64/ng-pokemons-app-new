import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private _pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this._pokemonsService.getPokemon(id).subscribe(pokemon => {
      this.pokemon = pokemon
    });
  }
}
