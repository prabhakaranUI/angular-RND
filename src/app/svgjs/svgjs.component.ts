import { Component, OnInit } from '@angular/core';
// import { SVG } from '@svgdotjs/svg.js'

@Component({
  selector: 'app-svgjs',
  templateUrl: './svgjs.component.html',
  styleUrls: ['./svgjs.component.scss']
})
export class SvgjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // console.log(SVG, 'kkk')

      // const draw = SVG().addTo('#canvas').size(400, 400);
      // const rect = draw.rect(100, 100,);
    }, 1000)

  }

}
