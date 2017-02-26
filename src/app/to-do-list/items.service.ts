import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Item, AppStore } from './items';
@Injectable()
export class ItemsService {
    items: Observable<Array<Item>>;
    constructor(private store: Store<AppStore>) {
        this.items = store.select('items'); // Bind an observable of our tasks to "ItemsService"
        console.log('constructor', this.items);
    }

    loadItems() {
        let initialItems: Item[] = [
            // ITEM OBJECTS HERE
        ];
        // every time we dispatch the ADD_ITEMS event, 
        // our local items collection is automatically updated 
        // because it is being via an observable.
        this.store.dispatch({ type: 'ADD_ITEMS', payload: initialItems });
    }

    deleteItem(item: Item) {
        this.store.dispatch({ type: 'DELETE_ITEM', payload: item });
    }

    saveItem(item: Item) {
        (item.id) ? this.updateItem(item) : this.createItem(item);
    }

    createItem(item: Item) {
        this.store.dispatch({ type: 'CREATE_ITEM', payload: this.addUUID(item) });
    }

    updateItem(item: Item) {
        this.store.dispatch({ type: 'UPDATE_ITEM', payload: item });
    }

    // NOTE: Utility functions to simulate server generated IDs
    private addUUID(item: Item): Item {
        return Object.assign({}, item, { id: this.generateUUID() }); // Avoiding state mutation FTW!
    }

    private generateUUID(): string {
        return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
            .replace(/1|0/g, function () {
                return (0 | Math.random() * 16).toString(16);
            });
    };
}