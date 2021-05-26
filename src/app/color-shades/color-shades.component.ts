import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-shades',
  templateUrl: './color-shades.component.html',
  styleUrls: ['./color-shades.component.scss']
})
export class ColorShadesComponent implements OnInit {
shadesArray: any = [];

  constructor() {
    this.generate();
  }

  ngOnInit(): void {
  }

  generate(): void{
    let r = 255 % 256;
    let g = 0 % 256;
    let b = 0 % 256;
    for (let i = 0; i < 100; i++){
      this.shadesArray.push({rgbShades: `${r += 5},${g += 5},${b += 5}`});
    }
    console.log(this.shadesArray);
  }


}
