import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements OnInit {
  private svg: any;
  private margin = 50;
  private width = 100 - (this.margin * 2);
  private height = 100 - (this.margin * 2);
  dragBounds: any = {};

  circleInfos = [
    { x: 10, y: 10, color: "red" },
    { x: 40, y: 40, color: "yellow" },
    { x: 70, y: 70, color: "blue" }
  ];

// create the drag object, note nothing is attached to it
// this can be used by multiple objects, usually you only need to create one drag object
  mydrag = d3.drag();
  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.initDragHandlers();
    this.initCircles();
  }

  private createSvg(): void {
    this.svg = d3.select("svg")
        .attr("width", this.width + (this.margin * 2)+'%')
        .attr("height", this.height + (this.margin * 2)+'%')
        .on("mousedown", function () {
            console.log("mousedown", d3.mouse(this));
        })
        .on("mousemove", function () {
            console.log("svg", d3.mouse(<any>this));
        })
        .on("mouseenter", function () {
          console.log("mouse enter");
        })
        .on("mouseleave", function () {
          console.log("mouse leave");
        });
  }

initDragHandlers(): void {
    // register drag with start/drag/end
    this.mydrag
        .on("start", function (d) {
          d3.select(this)
              .classed("active", true);   // apply highlight style
        })
        .on("drag", function ( d: { x: number, y: number, color: string }) {

            d3.select(this)
              .attr("cx", d.x += d3.event.dx)   // update data in the object and set cx at the same time
              .attr("cy", d.y += d3.event.dy);
        })
        .on("end", function (d) {
          d3.select(this)
              .classed("active", false);  // remove highlight style
        });
  }

  /**
   * creates circles using databinding and attaches them to the drag object
   */
  initCircles(): void {
    let sel = d3.select(".circle-group").selectAll(".mycircle").data(this.circleInfos);

    // not needed since this is executed only once but shown for completeness
    sel.exit().remove();

    sel.enter()
        .append("circle")
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        })
        .attr("r", 10)
        .attr("fill", function (d) {
          return d.color;
        })
        .call(<any>this.mydrag);
  }

}
