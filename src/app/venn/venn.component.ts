import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let  venn: any;
declare let  d3: any;

@Component({
  selector: 'app-venn',
  templateUrl: './venn.component.html',
  styleUrls: ['./venn.component.scss']
})
export class VennComponent implements OnInit, AfterViewInit {
  sets: any;
  constructor() { 
    this.sets = [
     {
      "sets": ["Personal Health Info"],
      "size": 102414.00
    }, {
      "sets": ["Accounts", "Personal Health Info", "Personally Identifiable"],
      "size": 26173.00
    }, {
      "sets": ["Business sensitive"],
      "size": 91197.00
    }, {
      "sets": ["Employee Information"],
      "size": 50318.00
    }, {
      "sets": ["Healthcare"],
      "size": 80995.00
    }, {
      "sets": ["Accounts"],
      "size": 26173.00
    }, {
      "sets": ["Business sensitive", "Healthcare", "Personal Health Info"],
      "size": 25809.00
    }, {
      "sets": ["Uncategorized Classification"],
      "size": 30335.00
    },
   {
      "sets": ["Personally Identifiable"],
      "size": 26173.00
    }];
  }

  ngAfterViewInit(): void {
    var chart = venn.VennDiagram();
    d3.select("#venn").datum(this.sets).call(chart);
  }

  ngOnInit(): void {
  }

}
