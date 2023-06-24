import { Component, OnInit,  ViewChild, ElementRef, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import * as SVG from 'svg.js';

@Component({
  selector: 'app-etl-canvase',
  templateUrl: './etl-canvase.component.html',
  styleUrls: ['./etl-canvase.component.scss']
})
export class EtlCanvaseComponent implements OnInit, AfterViewInit{
    showRectangle = true;
    showResizeHandle = true;
    rectX = 0;
    rectY = 0;
    rectWidth = 100;
    rectHeight = 100;
    startX = 0;
    startY = 0;
    isDragging = false;
    isResizing = false;


    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
    }

    ngOnInit(): void {

    }





    handleMouseDown(event: MouseEvent) {
        this.startX = event.clientX - this.rectX;
        this.startY = event.clientY - this.rectY;
        this.isDragging = true;
        this.showRectangle = true;
        this.showResizeHandle = true;
    }

    handleMouseMove(event: MouseEvent) {
        if (this.isDragging) {
            this.rectX = event.clientX - this.startX;
            this.rectY = event.clientY - this.startY;
        }
        if (this.isResizing) {
            const newWidth = event.clientX - this.rectX;
            const newHeight = event.clientY - this.rectY;
            if (newWidth > 0) {
                this.rectWidth = newWidth;
            }
            if (newHeight > 0) {
                this.rectHeight = newHeight;
            }
        }
    }

    handleMouseUp() {
        this.isDragging = false;
        this.isResizing = false;
    }

    handleResizeDown(event: MouseEvent) {
        event.stopPropagation();
        this.isResizing = true;
    }



}
