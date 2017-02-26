import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Item, AppStore } from './items';
import { ItemsService } from './items.service';
import { Store } from '@ngrx/store';
/**
 * In practice, I recommend keeping your components fine-grained enough 
 * that it is easy to inline your templates. A really 
 * large HTML snippet probably means that you are doing too much.
 */
@Component({
  selector: 'to-do-list',
  template: `<div>
              <items-list [items]="items | async"
                (selected)="selectItem($event)" 
                (deleted)="deleteItem($event)"
              ></items-list>
            </div>
            <div>
              <item-detail [item]="selectedItem | async"
                (saved)="saveItem($event)" 
                (cancelled)="resetItem($event)"
              ></item-detail>
            </div>`,
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;

  constructor(
    private itemsService: ItemsService,
    private store: Store<AppStore>) {
    // get the initial state via service
    // -> single state managment
    // store interaction via service
    // -> delegate complex operation to service, and service can reuse by others 
    this.items = itemsService.items;

    // why not access via itemsService? 
    // -> mutiple view can have difference selectedItem
    this.selectedItem = store.select('selectedItem');
    // console.log('constructor', this.selectedItem);

    this.selectedItem.subscribe(v => console.log('selectedItem update', v));
    // "itemsService.loadItems" dispatches the "ADD_ITEMS" event to our store,
    // which in turn updates the "items" collection
    itemsService.loadItems();
  }

  ngOnInit() {
  }

  selectItem(item: Item) {
    // why not access via itemsService? 
    // -> mutiple view can have difference selectedItem
    // store is select('selectedItem') now
    this.store.dispatch({ type: 'SELECT_ITEM', payload: item });
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item);
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: ''};
    this.store.dispatch({type: 'SELECT_ITEM', payload: emptyItem});
  }
  
  saveItem(item: Item) {
    this.itemsService.saveItem(item);
    this.resetItem();
  }

}