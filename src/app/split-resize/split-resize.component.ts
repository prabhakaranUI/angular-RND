import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-resize',
  templateUrl: './split-resize.component.html',
  styleUrls: ['./split-resize.component.scss']
})
export class SplitResizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.dragElement( document.getElementById("separator"), "H" );
  }


  // dragElement(element, direction): void {
  //
  //   const first  = document.getElementById("first");
  //   const second = document.getElementById("second");
  //   element.onmousedown = 'onMouseDown';
  //   this.onMouseDown.apply(this, [this, first, second, element]);
  //}
  // onMouseDown(e, first, second, element): void {
  //   let md; // remember mouse down info
  //   md = {e,
  //     offsetLeft:  element.offsetLeft,
  //     offsetTop:   element.offsetTop,
  //     firstWidth:  first.offsetWidth,
  //     secondWidth: second.offsetWidth
  //   };
  //
  //   document.onmousemove = 'onMouseMove';
  //   document.onmouseup = () => {
  //     document.onmousemove = document.onmouseup = null;
  //   }
  // }
  //
  // onMouseMove(e): void {
  //   var delta = {x: e.clientX - md.e.clientX,
  //     y: e.clientY - md.e.clientY};
  //
  //   if (direction === "H" ) // Horizontal
  //   {
  //     // Prevent negative-sized elements
  //     delta.x = Math.min(Math.max(delta.x, -md.firstWidth),
  //         md.secondWidth);
  //
  //     element.style.left = md.offsetLeft + delta.x + "px";
  //     first.style.width = (md.firstWidth + delta.x) + "px";
  //     second.style.width = (md.secondWidth - delta.x) + "px";
  //   }
  // }





}
