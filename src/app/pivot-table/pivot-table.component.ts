import { Component, OnInit, ElementRef, Inject, AfterViewInit} from '@angular/core';

import 'pivottable/dist/pivot.min.js';
import 'pivottable/dist/pivot.min.css';



declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-pivot-table',
  templateUrl: './pivot-table.component.html',
  styleUrls: ['./pivot-table.component.scss']
})
export class PivotTableComponent implements OnInit, AfterViewInit  {
  private el: ElementRef;
    private renderers: any;
    private derivers: any;
  constructor(@Inject(ElementRef)el: ElementRef) {
    this.el = el;

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{

    if (!this.el ||
        !this.el.nativeElement ||
        !this.el.nativeElement.children){
      console.log('cant build without element');
      return;
    }

    const container = this.el.nativeElement;
    const inst = jQuery(container);
    const targetElement = inst.find('#output');

    if (!targetElement){
      console.log('cant find the pivot element');
      return;
    }


    while (targetElement.firstChild){
      targetElement.removeChild(targetElement.firstChild);
    }
      this.renderers = jQuery.extend(jQuery.pivotUtilities.renderers, jQuery.pivotUtilities.c3_renderers);

      this.derivers = $.pivotUtilities.derivers;

    //here is the magic
    targetElement.pivotUI([{'id': '01', 'make': 'Bavaria', 'Model': '36', 'Length': '36', 'type': 'sailboat'},
          {'id': '02', 'make': 'Bavaria', 'Model': '38', 'Length': '38', 'type': 'sailboat'},
          {'id': '03', 'make': 'Bavaria', 'Model': '31', 'Length': '31', 'type': 'sailboat'},
          {'id': '04', 'make': 'Beneteau', 'Model': 'First 27', 'Length': '27', 'type': 'sailboat'},
          {'id': '05', 'make': 'Beneteau', 'Model': 'Oceanis 31', 'Length': '31', 'type': 'sailboat'},
          {'id': '06', 'make': 'Beneteau', 'Model': 'Flyer 8', 'Length': '27', 'type': 'motor'},
          {'id': '07', 'make': 'Beneteau', 'Model': 'Barracuda', 'Length': '31', 'type': 'motor'},
          {'id': '08', 'make': 'Beneteau', 'Model': 'Antares 36', 'Length': '36', 'type': 'motor'},
          {'id': '09', 'make': 'Dehler', 'Model': '31', 'Length': '31', 'type': 'sailboat'},
          {'id': '10', 'make': 'Dehler', 'Model': '34', 'Length': '34', 'type': 'sailboat'},
          {'id': '11', 'make': 'Laser', 'Model': 'Standar', 'Length': '12', 'type': 'dinghy'}],
          {renderers: this.renderers}
        );
  }

}
