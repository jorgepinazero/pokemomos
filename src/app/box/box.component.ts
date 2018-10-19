import {Component, Input, OnInit} from '@angular/core';
import {Block} from '../models/block';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input ()item: Block;

  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

}



