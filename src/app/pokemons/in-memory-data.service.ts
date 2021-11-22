import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './mock-pokemons';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        let pokemons = POKEMONS;
        return { pokemons };
    }
}

//GET api/pokemons
//GET api/pokemons/1
//PUT api/pokemons/1
//GET api/pokemons?name=bul