import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sudokuAI';
  width = 0;
  height = 0;
  ItemsArray = [[1],[2],[3]];

  constructor() {
  }

  ngOnInit() {
    
  }

  setWidth(event: any) {
    this.width = event.target.value;
  }

  setHeight(event: any) {
    this.height = event.target.value;
  }

  setItemsArray() {
    const tempArray : number[] = [];
    for (let index = 0; index < this.width; index++) {
      tempArray.push(0);
    }
    const swapArray = [];
    for (let index = 0; index < this.height; index++) {
      swapArray.push(tempArray);
    }

    this.ItemsArray = swapArray;
  }

  