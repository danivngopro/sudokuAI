import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sudokuAI';
  width = 0;
  height = 0;
  ItemsArray = [[1]];

  constructor() {}

  ngOnInit() {}

  setWidth(event: any) {
    this.width = event.target.value;
  }

  setHeight(event: any) {
    this.height = event.target.value;
  }

  setItemsArray() {
    const tempArray: Array<Array<number>> = [];
    for (let i = 0; i < this.height; i++) {
      let arr = [];
      for (let j = 0; j < this.width; j++) {
        arr.push(0);
      }
      tempArray.push(arr);
      arr = [];
    }

    this.ItemsArray = tempArray;
  }

  editCell(event: any) {
    this.ItemsArray[event.target.id[0]][event.target.id[1]] =
      event.target.value;
  }

  getAllData() {
    const tempArray: Array<Array<number>> = [];
    for (let i = 0; i < this.height; i++) {
      let arr = [];
      for (let j = 0; j < this.width; j++) {
        arr.push(
          (document.getElementById('' + i + j) as HTMLInputElement)
            .value as unknown as number
        );
      }
      tempArray.push(arr);
      arr = [];
    }

    return tempArray;
  }

  removeItemFromArray(arr: any, value: any) {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  solve() {
    this.ItemsArray = this.getAllData();

    const voc = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //check line
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.ItemsArray[i][j] == 0) {
          let tempvoc = [...voc];
          for (let k = 0; k < this.width; k++) {
            tempvoc.forEach((num) => {
              if (this.ItemsArray[i][k] == num) {
                tempvoc = this.removeItemFromArray(tempvoc, num);
              }
            });
          }

          //check row
          for (let k = 0; k < this.width; k++) {
            tempvoc.forEach((num) => {
              if (this.ItemsArray[k][j] == num) {
                tempvoc = this.removeItemFromArray(tempvoc, num);
              }
            });
          }

          //check 3x3 box
          let searchAreaLine = [0, 0];
          if (i < 3) searchAreaLine = [0, 3];
          else if (i >= 3 && i < 6) searchAreaLine = [3, 6];
          else searchAreaLine = [6, 8];

          let searchAreaRow = [0, 0];
          if (j < 3) searchAreaRow = [0, 3];
          else if (j >= 3 && j < 6) searchAreaRow = [3, 6];
          else searchAreaRow = [6, 8];

          for (let i = searchAreaLine[0]; i < searchAreaLine[1]; i++) {
            for (let j = searchAreaRow[0]; j < searchAreaRow[1]; j++) {
              tempvoc.forEach((num) => {
                if (this.ItemsArray[i][j] == num) {
                  tempvoc = this.removeItemFromArray(tempvoc, num);
                }
              });
            }
          }

          console.log(i, j, tempvoc);

          if (tempvoc.length === 1) {
            console.log('yay found' + tempvoc[0]);

            this.ItemsArray[i][j] = tempvoc[0];
          }
        }
      }
    }
  }
}
