import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-multidrag',
  templateUrl: './multidrag.component.html',
  styleUrls: ['./multidrag.component.scss']
})
export class MultidragComponent implements OnInit {
  origin = [
    {title: 'Text', type:'text'},
    {title: 'Number', type: 'number'},
    {title: 'Dropdown', type:'select'},
    {title: 'Radio', type:'radio'},
    {title: 'Checkbox', type:'check'},
    {title: 'Date', type:'date'},
  ];

  destination: any = [];
  destination1: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void{
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const item = event.previousContainer.data[event.previousIndex];
      const copy = JSON.parse(JSON.stringify(item));
      const element = {};
      for (const attr in copy){
        if (attr === 'title'){
          element[attr] = copy[attr];
        }else{
          element[attr] = copy[attr];
        }
      }
      this.destination1.splice(event.currentIndex, 0 , element);
    }
  }

}
