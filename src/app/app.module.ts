import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter';
import { ToDoListModule } from './to-do-list/to-do-list.module';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToDoListModule,
    // { key : value }
    // { storeName : Reducer }
    // StoreModule.provideStore({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
