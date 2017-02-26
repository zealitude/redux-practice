import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';
import { Observable } from 'rxjs/Observable';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-counter',
  template: `
        <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>

        <button (click)="reset()">Reset Counter</button>
    `
})
export class CounterComponent implements OnInit {

  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    // switch the state by key
    // this.counter is a state
    this.counter = store.select('counter');
  }

  increment() {
    // operate state by dispatch a action
    // { key : value }
    // action { type: actionString }
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  ngOnInit() {
  }

}