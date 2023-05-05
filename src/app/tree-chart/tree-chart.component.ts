import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-chart',
  templateUrl: './tree-chart.component.html',
  styleUrls: ['./tree-chart.component.scss']
})
export class TreeChartComponent implements OnInit {
array = [
{searchName: 'fff'},
{searchName: 'hello'},
{searchName: 'vvv'},
{searchName: 'edit'},
{
  searchName: 'app',
  childSearchList: [
  {searchName: 'xxx'},
  {searchName: 'zero'},
  {searchName: 'super'},
  {searchName: 'vv'},
  {searchName: 'money'}]
}
];

  constructor() {
console.log(this.array);
this.arraySort(this.array);
}

ngOnInit(): void {}

arraySort(array): void{
  const sorted = array.sort((t1, t2) => {
    if (t1.childSearchList){
      this.arraySort(t1.childSearchList);
    }
    if (t2.childSearchList){
       this.arraySort(t2.childSearchList);
    }
    const name1 = t1.searchName.toLowerCase();
    const name2 = t2.searchName.toLowerCase();
    if (name1 > name2) { return 1; }
    if (name1 < name2) { return -1; }
    return 0;
  });
}
}


