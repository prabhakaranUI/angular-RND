import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import {Renderer2} from '@angular/core';
import { fabric } from 'fabric';
@Component({
  selector: 'app-image-bounding-box',
  templateUrl: './image-bounding-box.component.html',
  styleUrls: ['./image-bounding-box.component.scss']
})
export class ImageBoundingBoxComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D;
  imgWith: number;
  imgHeight: number;
  img;
  canvasElement;
  rects;
  index = 0;
  svg;
  rect;
  boxGroup;
  mainGroup;
  box: any = {};
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      document.querySelectorAll('rect').forEach(list => {
        list.setAttribute('stroke', 'white');
      });
    });
    this.rects = [
      {x: 1267, y: 776, w: 252, h: 288, id: 1},
      {x: 140, y: 60, w: 70, h: 130, id: 2},
      {x: 10, y: 50, w: 70, h: 60, id: 3},
    ];
  }
  ngAfterViewInit(): void {
    this.createBoundingBox();
  }


  createBoundingBox(): void {
    this.img = new Image();
    this.img.src = './assets/download.jpeg';
    this.img.onload = () => {
      this.imgHeight = this.img.height;
      this.imgWith = this.img.width;
      this.generateSvg();
      // this.showImage();
    };
  }

  showImage(): void{
    this.canvasElement = this.canvas.nativeElement;
    this.context = this.canvasElement.getContext('2d');
    this.canvasElement.width = this.imgWith;
    this.canvasElement.height = this.imgHeight;
    const scale = Math.min(this.canvasElement.width / this.img.width, this.canvasElement.height / this.img.height);
    const x = (this.canvasElement.width / 2) - (this.img.width / 2) * scale;
    const y = (this.canvasElement.height / 2) - (this.img.height / 2) * scale;
    this.context.drawImage(this.img, x, y, this.img.width * scale, this.img.height * scale);
    const parent = this;

    this.canvasElement.addEventListener('click', (e) => {
      parent.index = 0;
      parent.box = {};
      // parent.context.clearRect(50, 60, 100, 150);
      // tslint:disable-next-line:no-conditional-assignment
      while (parent.box = parent.rects[parent.index++]) {
        parent.context.beginPath();
        parent.context.rect(parent.box.x, parent.box.y, parent.box.w, parent.box.h);
        parent.context.strokeStyle = parent.context.isPointInPath(e.offsetX, e.offsetY) ? 'blue' : 'white';
        parent.context.stroke();
        if (parent.context.isPointInPath(e.offsetX, e.offsetY)){
          console.log(parent.box);
        }
      }

    });

    // tslint:disable-next-line:only-arrow-functions
    // this.canvasElement.addEventListener('click', (e) => {
    //   console.log(parent.context.isPointInPath(e.offsetX, e.offsetY));
    //   console.log(e);
    // });

    this.drawRect();
  }

  drawRect(color = 'white'): void{
    this.index = 0;
    this.box = {};

    // tslint:disable-next-line:no-conditional-assignment
    while (this.box = this.rects[this.index++]) {
      this.context.beginPath();
      this.context.rect(this.box.x, this.box.y, this.box.w, this.box.h);
      this.context.strokeStyle = color;
      this.context.stroke();
    }

  }


  /////////////////////// SVG ///////////////////////////////////////////////////////////////

  generateSvg(): void {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('id', 'svgImg');
    this.svg.setAttribute('width', this.imgWith);
    this.svg.setAttribute('height', this.imgHeight);
    this.svg.setAttribute('transform', 'scale(0.3)');
    this.svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
    const loadImg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    loadImg.setAttribute('href', './assets/download.jpeg');
    this.svg.appendChild(loadImg);
    this.setBoundingBox();

  }


  setBoundingBox(): void {
    this.boxGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    for (let i = 0; i < this.rects.length; i++) {
      this.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      this.rect.setAttribute('id', this.rects[i].id);
      this.rect.setAttribute('y', this.rects[i].y);
      this.rect.setAttribute('x', this.rects[i].x);
      this.rect.setAttribute('width', this.rects[i].w);
      this.rect.setAttribute('height', this.rects[i].h);
      this.rect.setAttribute('stroke', 'white');
      this.rect.setAttribute('fill', 'transparent');
      this.rect.setAttribute('stroke-width', '1');

      this.boxGroup.appendChild(this.rect);
    }
    this.svg.appendChild(this.boxGroup);
    document.getElementById('svgImage')?.appendChild(this.svg);
  }

  selectObject(list): void{
    // tslint:disable-next-line:no-shadowed-variable
    document.querySelectorAll('rect').forEach(list => {
      list.setAttribute('stroke', 'white');
    });
    // @ts-ignore
    document.getElementById(list.id).setAttribute('stroke', 'red');
  }


  zoom(direction): void{
    const svg = document.getElementById('svgImg');
    console.log(svg);
    const { scale, x, y } = this.getTransformParameters(svg);
    let dScale = 0.1;
    if (direction === 'out') { dScale *= -1; }
    if (scale === 0.1 && direction === 'out') { dScale = 0; }
    // @ts-ignore
    svg.style.transform = this.getTransformString(scale + dScale, x, y);
  }


getTransformParameters(element): any {
  const transform = element.style.transform;
    let scale = 1,
        x = 0,
        y = 0;
    if (transform.includes('scale')) {
      scale = parseFloat(transform.slice(transform.indexOf('scale') + 6));
    }
    if (transform.includes('translateX')) {
      x = parseInt(transform.slice(transform.indexOf('translateX') + 11));
    }
    if (transform.includes('translateY')) {
      y = parseInt(transform.slice(transform.indexOf('translateY') + 11));
    }
    return { scale, x, y };
  }

  getTransformString(scale, x, y): any {
   return  "scale(" + scale + ") " + "translateX(" + x + "%) translateY(" + y + "%)";
  }

}
