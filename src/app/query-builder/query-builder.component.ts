import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Table 1',
    children: [{name: 'column 1'}, {name: 'column 2'}, {name: 'column 3'}],
  },
];
@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss']
})
export class QueryBuilderComponent implements OnInit, AfterViewInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  public items = [
    { name: 'John', otherProperty: 'Foo' },
    { name: 'Joe', otherProperty: 'Bar' }
  ];
  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }


  showMessage(message: any) {
    console.log(message);
  }

  onrightClick(event): void {
    this.contextmenuX = event.clientX;
    this.contextmenuY = event.clientY;
    this.contextmenu = true;
  }
  //disables the menu
  disableContextMenu(): void {
    this.contextmenu = false;
  }




}
