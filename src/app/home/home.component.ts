import { Component, OnInit, Input, } from '@angular/core';
import {text} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input ()item: Block;
  block: Block[][] = [];
  @Input()
  row = 5;
  @Input()
  column = 5;
  count = 0;
  constructor() { }

  ngOnInit() {
    this._initBlock();
  }
  private _initBlock() {
    for (let row = 0; row < this.row; row++) {
      const aux: Block[] = [];
      for (let column = 0; column < this.column; column++) {
        aux.push(new Block(row, column, '' ));
      }
      this.block.push(aux);
    }
  }
  // getValue(box: Block): number {
  //   return box.row * this.row + box.column;
  // }

  counter(box: Block) {
    if (box.column % 2 === 0) {
      box.text = 'true';
    } else if (box.column % 2 !== 0) {
      box.text = 'false';
    }
  }
}

export class Block {
  row: number;
  column: number;
  text: string;


  constructor(row: number, column: number, text1: string) {
    this.row = row;
    this.column = column;
    this.text = text1;
  }
}

