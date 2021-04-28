import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  _counter: number = 0;
  set counter(value) {
    if (value) {
      console.log("Old:", this._counter, "New:", value);
      this._counter = value;
    }
  }
  constructor() {}
  increment() {
    console.log("Old:", this._counter);
    this._counter++;
  }
  decrement() {
    if (this._counter > 0) {
      this._counter--;
    }
  }
  reset() {
    this._counter = 0;
  }
}
