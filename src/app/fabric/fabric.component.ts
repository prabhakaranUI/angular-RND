import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.scss']
})
export class FabricComponent implements OnInit {
  canvas: any;
  constructor() { }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas');
    const text = new fabric.Textbox('Hello World', {
      width: 200,
      height: 100,
      fontSize: 24,
      cursorColor: 'blue',
      left: 50,
      top: 50
  });
    this.canvas.add(text);

    const circle = new fabric.Circle({
      radius: 50,
      fill: 'red',
      left: 100,
      top: 100
  });
  
    this.canvas.add(circle);

    const rectangle = new fabric.Rect({
      width: 100,
      height: 50,
      fill: 'blue',
      left: 200,
      top: 200
  });
  
  rectangle.set({
      fill: 'green',
      width: 150,
      height: 75
  });
  
  this.canvas.add(rectangle);
  }

 

}
