import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-svg-path',
  templateUrl: './svg-path.component.html',
  styleUrls: ['./svg-path.component.scss']
})
export class SvgPathComponent implements OnInit {
  // @Input() start: { x: number; y: number };
  // @Input() end: { x: number; y: number };
  // constructor() { }
  // private isDragging = false;
  // private isResizingStart = false;
  // private isResizingEnd = false;
  // private startOffset = 0;
  // private endOffset = 0;
  // private startPosition = 0;
  // private endPosition = 0;
  // public lineLength = 200; // Initial line length




  ngOnInit(): void {
  }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   if (this.isDragging) {
  //     // const newPosition = event.clientX - this.startPosition;
  //     // this.lineStyle.left = newPosition;
  //     // console.log(this.lineStyle, 'setart');
  //   }

  //   if (this.isResizingEnd) {
  //     const newPosition = event.clientX;
  //     this.lineStyle.width = newPosition - this.endPosition;
  //     console.log(this.lineStyle, 'end');
  //   }

  //   if (this.isResizingStart) {
  //     // const newPosition = event.clientX - this.startPosition;
  //     // const newWidth = this.endPosition - event.clientX;
  //     // this.lineStyle.left = newPosition;
  //     this.lineStyle.left = event.clientX - this.endPosition;
  //     console.log(this.lineStyle, 'start');
  //   }
  // }

  // startDrag(event: MouseEvent) {
  //   this.isResizingStart = true;
  //   this.startOffset = event.clientX - event.currentTarget.getBoundingClientRect().left;
  //   this.startPosition = event.currentTarget.offsetLeft;
  // }

  // endDrag(event: MouseEvent) {
  //   this.isResizingEnd = true;
  //   this.endOffset = event.currentTarget.getBoundingClientRect().right - event.clientX;
  //   this.endPosition = event.currentTarget.offsetLeft;
  // }

  // startResize(event: MouseEvent) {
  //   this.isDragging = true;
  //   this.startPosition = event.clientX;
  // }

  // @HostListener('document:mouseup')
  // onMouseUp() {
  //   this.isDragging = false;
  //   this.isResizingStart = false;
  //   this.isResizingEnd = false;
  // }

  // get svgWidth(): string {
  //   return '100%';
  // }
  //
  // get svgHeight(): string {
  //   return '100%';
  // }
  //
  // get pathData(): string {
  //   return `M ${this.start.x} ${this.start.y} L ${this.end.x} ${this.end.y}`;
  // }

}
