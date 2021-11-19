import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {increment, decrement, reset} from '../actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
   public count$: any;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }





}
