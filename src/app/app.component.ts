import { Component, AfterViewInit, OnInit } from '@angular/core';
declare var LeaderLine: any;
declare var PlainDraggable: any;
import * as SockJS from 'sockjs-client';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,  AfterViewInit{

  name = 'Angular';
  mapping: any = [];
  mapping2: any = []
  mappedObj: any = {};
  mappedObj2: any = {};
  selection: any;
  selection2: any;
  mapped: boolean = false;
  mappedIndex: any;
  el2: any;
  el: any ;

  savedMappings: any = [];

  constructor() {
    this.createAry();
    let sock = new SockJS('https://mydomain.com/my_prefix');

  }
ngOnInit(): void {

}


  ngAfterViewInit(): void {
    const draggable = new PlainDraggable(document.getElementById('draggable'));
    draggable.snap = {step: 30};
  }



  selectionWasMapped(id: any): any {
    for (let i = 0; i < this.savedMappings.length; i++) {
      if (this.savedMappings[i].mapping === id) {
        this.mappedIndex = i;
        return true;
      }
    }
  }

  selectionWasMapped2(id: any): any {
    for (let i = 0; i < this.savedMappings.length; i++) {
      if (this.savedMappings[i].mapping2 === id) {
        this.mappedIndex = i;
        return true;
      }
    }
  }




  leader(id: any, id2: any): any {
    let startEl = document.getElementById(id);
    let endEl = document.getElementById(id2);

    return new LeaderLine(
      startEl,
      endEl, {
        endPlugOutline: false,
        animOptions: { duration: 3000, timing: 'linear' }
      },
    );
  }

  doSomething(el: any): void {
    this.el = el.id;
    this.el2 = undefined;

    if (this.mapped) {
      this.selection = undefined;
      this.selection2 = undefined;
      this.mapped = false;
    }
    if (this.selectionWasMapped(el.id)) {
      this.savedMappings[this.mappedIndex].line.setOptions({dashed: true});


    } else if (this.selection === el.id) {
      this.el = '';

      this.selection = '';
    } else {
      this.selection = el.id;
    }

    if (this.isMapped()) {
      //save
      //mark mapped
      const l = this.leader(this.selection, this.selection2);
      this.mappedObj[this.selection] = true;
      this.mappedObj2[this.selection2] = true;
      this.save(l);
    }
  }

  save(l: any): any {
    this.savedMappings.push({
      mapping: this.selection,
      mapping2: this.selection2,
      line: l
    });
    console.log(this.savedMappings);
  }

  isMapped(): any {
    this.mapped = this.selection && this.selection2;
    return this.mapped;
  }


  doSomething2(el2: any): void{
    this.el2 = el2.id;
    this.el = undefined;
    if (this.mapped) {
      this.selection = undefined;
      this.selection2 = undefined;
      this.mapped = false;
    }



    if (this.selectionWasMapped2(el2.id)) {
      this.savedMappings[this.mappedIndex].line.setOptions({color: 'red'});
    } else if (this.selection2 === el2.id) {
      this.el2 = '';

      this.selection2 = '';
    } else {
      this.selection2 = el2.id;
    }

    if (this.isMapped()) {
      //save
      //mark mapped
      const l = this.leader(this.selection, this.selection2);

      this.mappedObj[this.selection] = true;
      this.mappedObj2[this.selection2] = true;

      this.save(l);
    }
  }




  createAry(): void {
    for (let i = 0; i < 10; i++) {
      this.mapping.push({ id: i });
      this.mapping2.push({ id: i });
    }
  }
}
