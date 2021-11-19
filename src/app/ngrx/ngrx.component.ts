import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {
  public count$: any;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
  }

}
