import { Component, OnInit , AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import * as d3 from 'd3';
import { debounceTime } from 'rxjs/operators';
import { Observable, fromEvent } from 'rxjs';
import * as layout from 'd3';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit{
  @ViewChild('canvasEl')
  canvasEl: ElementRef;
  @ViewChild('input') inputClick: ElementRef;
  public context: CanvasRenderingContext2D;
  private svg: any;
  private group: any;
  private svgWidth = 900;
  private svgHeight = 500;
  constructor() { }

  ngOnInit(): void {
    this.createBuilder();

    // @ts-ignore
    const clicks = fromEvent(document.getElementById('input'), 'keyup', true);
    const result = clicks.pipe(debounceTime(1000));
    result.subscribe(x => console.log(x));
  }
  ngAfterViewInit(): void {
    this.context = this.canvasEl.nativeElement.getContext('2d');
    this.context.beginPath();
    this.context.arc(200, 200, 40, 0, 2 * Math.PI);
    this.context.stroke();
  }

  public mouseEvent(event): void {
    console.log(event, 'click');
  }

  public mouseEnter(): void {
    console.log( 'mouseEnter');
  }

  public mouseOver(event): void {
    console.log(event, 'mouseOver');
  }

  public mouseOut(event): void {
    console.log(event, 'mouseOut');
  }

  public editPanel(event): void {
    console.log(event, 'editPanel');
  }

  createBuilder(): void {
// Append an svg object to the base element.
    this.svg = d3.select('svg')
        .attr("class", "svg")
        .attr("width", this.svgWidth)
        .attr("height", this.svgHeight);

// Append a new group to the svg.
    this.group = this.svg
        .append("g")
        .attr("id", "testCardGroup")
        .attr("width", this.svgWidth)
        .attr("height", this.svgHeight);

    const node =  this.group
        .append('rect')
        .attr("width", '100')
        .attr("height", 100);
  }

  rxjs(): void{

  }

}
