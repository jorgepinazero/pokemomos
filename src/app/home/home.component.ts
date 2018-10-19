import { Component, OnInit, Input, } from '@angular/core';
import {Block} from '../models/block';
import {PokemonService} from '../service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  block: Block[][] = [];
  imagenes: Array <string>  = [];
  @Input()
  row = 7;
  @Input()
  column = 7;
  count=0;
  constructor(public pokeService: PokemonService) { }

  ngOnInit() {
    this.getPokemones();
  }
  private _initBlock() {
    for (let row = 0; row < this.row; row++) {
      const aux: Block[] = [];
      for (let column = 0; column < this.column; column++, this.count++) {
        aux.push(new Block(row, column, this.imagenes[this.count]));
      }
      this.block.push(aux);
    }
  }
  getPokemones () {
    this.pokeService.getPokemon().subscribe(
              result => {
                console.log(result);
                this.imagenes[0] = result.sprites.back_default;
                console.log(this.imagenes[0]);
                this._initBlock();
              },
              error => {console.log(error); }
              );
  }

}


