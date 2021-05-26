import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-shades',
  templateUrl: './color-shades.component.html',
  styleUrls: ['./color-shades.component.scss']
})
export class ColorShadesComponent implements OnInit {
shadesArray: any = [];

  constructor() {
    this.hexToRgb('#FF0000','#008000', 100);
  }

  ngOnInit(): void {

  }

  hexToRgb(hexOne, hexTwo, count): void {
    const colorOne = [ parseInt(hexOne.slice(1, 3), 16), parseInt(hexOne.slice(3, 5), 16), parseInt(hexOne.slice(5, 7), 16)];
    const colorTwo = [ parseInt(hexTwo.slice(1, 3), 16), parseInt(hexTwo.slice(3, 5), 16), parseInt(hexTwo.slice(5, 7), 16)];
    this.shadesArray = this.interpolateColors(
        `rgb(${Object.keys(colorOne).map((k) => colorOne[k]).join(',')})`,
        `rgb(${Object.keys(colorTwo).map((k) => colorTwo[k]).join(',')})`,
        count);
  }


// My function to interpolate between two colors completely, returning an array
  interpolateColors(color1, color2, steps): void {
    let stepFactor = 1 / (steps - 1);
        const interpolatedColorArray: any = [];

    color1 = color1.match(/\d+/g).map(Number);
    color2 = color2.match(/\d+/g).map(Number);

    for (let i = 0; i < steps; i++) {
      interpolatedColorArray.push(this.interpolateColor(color1, color2, stepFactor * i));
    }

    return interpolatedColorArray;
  }

  interpolateColor(color1, color2, factor): void {
    if (arguments.length < 3) {
      factor = 0.5;
    }
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
  }
}
