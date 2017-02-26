import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ToDoListModule } from './to-do-list/to-do-list.module';

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    HttpModule,
    ToDoListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
