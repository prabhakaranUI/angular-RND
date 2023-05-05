import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

export enum shapes {
    THOUSANDS = 'THOUSANDS',
    HUNDREDS = 'HUNDREDS',
    TENS = 'TENS',
    ONEC = 'ONEC'
}

@Component({
    selector: 'app-svg',
    templateUrl: './svg.component.html',
    styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
    squareForm: FormGroup;
    svg;
    group;
    mainGroup;
    rect;
    thousandsCountX: number;
    thousandsCountY: number;
    hundredsCount: number;
    tensCount: number;
    onecCount: number;
    shapes = shapes;

    constructor(public fb: FormBuilder) {
        this.squareForm = this.fb.group({
            thousands: '',
            hundreds: '',
            tens: '',
            once: '',
        });
    }

    ngOnInit(): void {
        this.generateSvg();
    }

    generateSvg(): void {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('style', 'border: 1px solid black');
        this.svg.setAttribute('width', '100%');
        this.svg.setAttribute('height', '250');
        this.svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
    }

    generateCube(type): void {
        if (type === shapes.THOUSANDS) {
            document.getElementById(shapes.THOUSANDS)?.remove();
            this.thousandsCountX = 20;
            const mainGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            mainGroup.setAttribute('id', shapes.THOUSANDS);
            mainGroup.setAttribute('transform', `translate(0 -70)`);
            for (let g = 0; g < this.squareForm.get('thousands')?.value; g++) {
                this.thousandsCountY = Number(`1${g}0`);
                this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                this.group.setAttribute('transform', `translate(${this.thousandsCountX} ${this.thousandsCountY})`);
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {
                        this.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        this.rect.setAttribute('width', '10');
                        this.rect.setAttribute('y', `${i}0`);
                        this.rect.setAttribute('x', `${j}0`);
                        this.rect.setAttribute('height', '10');
                        this.rect.setAttribute('fill', 'yellow');
                        this.rect.setAttribute('stroke', 'rgb(0,0,0)');
                        this.rect.setAttribute('stroke-width', '1');
                        this.group.appendChild(this.rect);
                    }
                }
                mainGroup.appendChild(this.group);
                this.svg.appendChild(mainGroup);
                const setCount = `${g + 3}${0}`;
                this.thousandsCountX = Number(setCount);
            }
            this.elementSpace();
        }
        if (type === shapes.HUNDREDS) {
            document.getElementById(shapes.HUNDREDS)?.remove();
            this.hundredsCount = 20;
            const thousandsContainerWidth = (Number(document.getElementById(shapes.THOUSANDS)?.getBoundingClientRect()?.width) + 30);
            const mainGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            mainGroup.setAttribute('id', shapes.HUNDREDS);
            mainGroup.setAttribute('transform', `translate(${thousandsContainerWidth} 0)`);
            for (let g = 0; g < this.squareForm.get('hundreds')?.value; g++) {
                this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                this.group.setAttribute('transform', `translate(${this.hundredsCount} 70)`);
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {
                        this.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        this.rect.setAttribute('width', '10');
                        this.rect.setAttribute('y', `${i}0`);
                        this.rect.setAttribute('x', `${j}0`);
                        this.rect.setAttribute('height', '10');
                        this.rect.setAttribute('fill', 'yellow');
                        this.rect.setAttribute('stroke', 'rgb(0,0,0)');
                        this.rect.setAttribute('stroke-width', '1');
                        this.group.appendChild(this.rect);
                    }
                }
                mainGroup.appendChild(this.group);
                this.svg.appendChild(mainGroup);
                const setCount = `${g + 1}${g + 3}${0}`;
                this.hundredsCount = Number(setCount);
            }
            this.elementSpace();
        }
        if (type === shapes.TENS) {
            document.getElementById(shapes.TENS)?.remove();
            this.tensCount = 20;
            const thousandsContainerWidth = (Number(document.getElementById(shapes.THOUSANDS)?.getBoundingClientRect()?.width) + 30);
            const hundredsContainerWidth = (Number(document.getElementById(shapes.HUNDREDS)?.getBoundingClientRect()?.width) + 30);
            const mainGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            mainGroup.setAttribute('id', shapes.TENS);
            mainGroup.setAttribute('transform', `translate(${thousandsContainerWidth + hundredsContainerWidth} 0)`);
            for (let g = 0; g < this.squareForm.get('tens')?.value; g++) {
                this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                this.group.setAttribute('transform', `translate(${this.tensCount} 70)`);
                for (let i = 0; i < 10; i++) {
                    this.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    this.rect.setAttribute('width', '10');
                    this.rect.setAttribute('y', `${i}0`);
                    this.rect.setAttribute('x', `0`);
                    this.rect.setAttribute('height', '10');
                    this.rect.setAttribute('fill', 'yellow');
                    this.rect.setAttribute('stroke', 'rgb(0,0,0)');
                    this.rect.setAttribute('stroke-width', '1');
                    this.group.appendChild(this.rect);
                }
                mainGroup.appendChild(this.group);
                this.svg.appendChild(mainGroup);
                const setCount = `${(g + 2) * 2}${0}`;
                this.tensCount = Number(setCount);
            }
            this.elementSpace();
        }
        if (type === shapes.ONEC) {
            document.getElementById(shapes.ONEC)?.remove();
            this.onecCount = 20;
            const hundredsContainerWidth = (Number(document.getElementById(shapes.HUNDREDS)?.getBoundingClientRect()?.width) + 30);
            const tensContainerWidth = (Number(document.getElementById(shapes.TENS)?.getBoundingClientRect()?.width) + 30);
            const mainGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            mainGroup.setAttribute('id', shapes.ONEC);
            mainGroup.setAttribute('transform', `translate(${hundredsContainerWidth + tensContainerWidth} 70)`);
            this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            this.group.setAttribute('transform', `translate(${this.onecCount} 70)`);
            for (let i = 0; i < this.squareForm.get('once')?.value; i++) {
                this.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                this.rect.setAttribute('width', '10');
                this.rect.setAttribute('y', `-${i}0`);
                this.rect.setAttribute('x', `0`);
                this.rect.setAttribute('height', '10');
                this.rect.setAttribute('fill', 'yellow');
                this.rect.setAttribute('stroke', 'rgb(0,0,0)');
                this.rect.setAttribute('stroke-width', '1');
                this.group.appendChild(this.rect);
            }
            mainGroup.appendChild(this.group);
            this.svg.appendChild(mainGroup);
            this.elementSpace();
        }
        document.getElementById('svgCube')?.appendChild(this.svg);
    }

    elementSpace(): void {
        let thousandsContainerWidth: number;
        let hundredsContainerWidth: number;
        let tensContainerWidth: number;
        if (document.getElementById(shapes.THOUSANDS)?.getBoundingClientRect()?.width !== undefined) {
            thousandsContainerWidth = (Number(document.getElementById(shapes.THOUSANDS)?.getBoundingClientRect()?.width) + 30);
        } else {
            thousandsContainerWidth = 0;
        }

        if (document.getElementById(shapes.HUNDREDS)?.getBoundingClientRect()?.width !== undefined) {
            hundredsContainerWidth = (Number(document.getElementById(shapes.HUNDREDS)?.getBoundingClientRect()?.width) + 30);
        } else {
            hundredsContainerWidth = 0;
        }

        if (document.getElementById(shapes.TENS)?.getBoundingClientRect()?.width !== undefined) {
            tensContainerWidth = (Number(document.getElementById(shapes.TENS)?.getBoundingClientRect()?.width) + 30);
        } else {
            tensContainerWidth = 0;
        }

        ///Onec
        document.getElementById(shapes.ONEC)?.setAttribute('transform', `translate(${hundredsContainerWidth + tensContainerWidth + thousandsContainerWidth} 90)`);

        ///Tens
        document.getElementById(shapes.TENS)?.setAttribute('transform', `translate(${hundredsContainerWidth + thousandsContainerWidth} 0)`);

        ///Hundreds
        document.getElementById(shapes.HUNDREDS)?.setAttribute('transform', `translate(${thousandsContainerWidth} 0)`);


    }
}
