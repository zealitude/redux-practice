import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list.component';

// import { provideStore } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';

import { items, selectedItem } from './items';

import { ItemsService } from './items.service';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    // provideStore(reducer: any, initialState?: any)
    // { items, selectedItem } 
    // { items: items, selectedItem: selectedItem }
    // { storeName : Reducer }
    StoreModule.provideStore({ 
      items: items, 
      selectedItem: selectedItem 
    }), // The store that defines our app state,
    FormsModule
  ],
  providers: [
    ItemsService, // The actions that consume our store
  ],
  declarations: [
    ToDoListComponent,
    ItemsListComponent,
    ItemDetailComponent
  ],
  exports: [
    ToDoListComponent
  ]
})
export class ToDoListModule { }