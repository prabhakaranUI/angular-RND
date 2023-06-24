import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-path',
  templateUrl: './svg-path.component.html',
  styleUrls: ['./svg-path.component.scss']
})
export class SvgPathComponent implements OnInit {
  @Input() start: { x: number; y: number };
  @Input() end: { x: number; y: number };
  constructor() { }

  ngOnInit(): void {
  }

  get svgWidth(): string {
    return '100%';
  }

  get svgHeight(): string {
    return '100%';
  }

  get pathData(): string {
    return `M ${this.start.x} ${this.start.y} L ${this.end.x} ${this.end.y}`;
  }

}
