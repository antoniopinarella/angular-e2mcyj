import { Component, HostListener, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-service-based",
  templateUrl: "./service-based.component.html",
  styleUrls: ["./service-based.component.css"]
})
export class ServiceBasedComponent implements OnInit {
  _counter = 0;
  @HostListener("click") onClick() {
    this._counter = this.counterService._counter;
  }
  constructor(private counterService: CounterService) {}

  ngOnInit() {}

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }
  fifty() {
    this.counterService._counter = 50;
  }
}
