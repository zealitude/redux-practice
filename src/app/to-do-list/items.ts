import { ActionReducer, Action } from '@ngrx/store';

export class Item {
    id: number;
    name: string;
    description: string;
    constructor() {}
}

// Centralized State
// this is interface only 
// -> reduce() will declare the default or providerStore init the default
// state ? store ? 
// export interface AppState
export interface AppStore {
    items: Item[];
    selectedItem: Item; // also as a initialState
}

// // The "items" reducer performs actions on our list of items
// export const items = (state: any = [], {type, payload}) => {
//   switch (type) {
//     default:
//       return state;
//   }
// };

// T will restrict the return type
// export interface Reducer<T> {
//     (state: T, action: Action): T;
// }

// export const items: Reducer<Item[]> = (state:Item[] = [], {type, payload}) => {
export function items(state: Item[] = [], action: Action) {
    console.log('itemsReducer', state, action);

    switch (action.type) {
        case 'ADD_ITEMS':
            // In this action, payload contain new items
            // returns whatever collection we send in as the new array.
            return action.payload;
        case 'CREATE_ITEM':
            // returns a new array by concatenating the existing items array 
            // with our new item. 
            return [...state, action.payload];
        case 'UPDATE_ITEM':
            // returns a new array by mapping through the current array, 
            // finding the item we want to update and cloning a new object using Object.assign.          
            return state.map((item: Item) => {
                return item.id === action.payload.id ? 
                        Object.assign({}, item, action.payload):
                        item;
                });
        case 'DELETE_ITEM':
            return state.filter((item: Item) => {
                return item.id !== action.payload.id;
            });
        default:
            return state;
    }
}


// The "selectedItem" reducer handles the currently selected item
export function selectedItem (state: any = null, {type, payload}) {
    console.log('selectedItem', state, type, payload);
    switch (type) {
        case 'SELECT_ITEM':
            // in this action, payload contain new state
            return payload;
        default:
            return state;
    }
};

