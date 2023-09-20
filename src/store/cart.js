import { createReducer } from '@reduxjs/toolkit';
import { ADD_TO_CART, REMOVE_FROM_CART, RESET } from './constants';

let initialState = {
    cart: [],
};

const cartReducer = createReducer(
    initialState,
    {
        [ADD_TO_CART]: (state, action) => {
            return { 
                cart: [
                ...state.cart, {
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: action.payload.quantity
                }]}
        },
        [REMOVE_FROM_CART]: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter((item) => item.name !== action.payload.name)
            }
        },
        [RESET]: (state, action) => {
            return state;
        }
    }
)


// const initialState = {
//     cart: [],
// };

// function cartReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             return {
//                 cart: [...state.cart, {
//                     name: action.payload.name,
//                     price: action.payload.price,
//                     quantity: action.payload.quantity,
//                 }],
//             };
//         case 'REMOVE_FROM_CART':
//             return {
//                 ...state,
//                 cart: state.cart.filter((item) => item.name !== action.payload.name),
//             };
//         case 'RESET':
//             return initialState;
//         default:
//             return state;
//     }
// }

export default cartReducer;