import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-shades',
  templateUrl: './random-shades.component.html',
  styleUrls: ['./random-shades.component.scss']
})
export class RandomShadesComponent implements OnInit {
  public randomShades: string[] = [];
  private numOfShades = 20;
  constructor() { }

  ngOnInit(): void {
    this.generateShades(174);   ///blue: 212, purple: 270, teal: 174, grey: 0, 0%
  }

  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateShades(hue): void {
    this.randomShades.push(`hsl(${hue}, 100%, 50%)`); // Create The selected color!
    for (var i = 0; i < this.numOfShades; i++) {      // Create shades!
      var hsl = `hsl(${hue}, ${this.rand(10, 90)}%, ${this.rand(10, 90)}%)`;
      this.randomShades.push(hsl);
    }
  }

}
