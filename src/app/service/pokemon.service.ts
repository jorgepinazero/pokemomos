import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon-form/12/';

  constructor(public http: HttpClient) {}

  getPokemon(): Observable<any> {
    return this.http.get(this.url);
  }
}
