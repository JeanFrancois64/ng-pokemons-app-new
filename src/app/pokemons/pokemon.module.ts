import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonsService } from './pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AuthGuardService } from '../auth-guard.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
        PokemonRoutingModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		BorderCardDirective,
		PokemonTypeColorPipe,
		PokemonFormComponent,
		EditPokemonComponent,
		SearchPokemonComponent
	],
	providers: [
		PokemonsService,
		AuthGuardService
	]
})
export class PokemonsModule { }