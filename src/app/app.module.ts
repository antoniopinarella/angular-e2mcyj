import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { BasicComponent } from './basic/basic.component';
import { ServiceBasedComponent } from './service-based/service-based.component';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [AppComponent, MyCounterComponent, BasicComponent, ServiceBasedComponent],
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/