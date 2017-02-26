import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// normal function
export function counterReducer(state: number = 0, action: Action){
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            // this is init value of reduce function
            return state;
    }
}

// Reducer format, function object to implement Reducer interface 
// export interface Reducer<T> {
//     (state: T, action: Action): T;
// }

// export const counterReducer: Reducer<number> = (state: number = 0, action: Action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         case RESET:
//             return 0;
//         default:
//             return state;
//     }
// };