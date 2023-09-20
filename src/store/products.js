import { createAction, createReducer } from '@reduxjs/toolkit';
import { ADD_TO_CART, CHANGE_CATEGORY, REMOVE_FROM_CART, RESET } from './constants';
import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export const setProducts = createAction(GET_PRODUCTS)

let initialState = {
    products: [],
};

const productsReducer = createReducer(
    initialState,
    {
        [GET_PRODUCTS]: (state, action) => {
            return {
                ...state,
                products: action.payload
            }
        },
        [CHANGE_CATEGORY]: (state, action) => {
            return {
                ...state,
            products: state.products.filter(product => product.category === action.payload.name)}
        },
        [ADD_TO_CART]: (state, action) => {
            return {
                ...state,
                inStock: state.products.map(product => {
                    if(product.name === action.payload.name){
                        product.inStock = product.inStock - 1;
                    }
                })
            }
        },
        [REMOVE_FROM_CART]: (state, action) => {
            return {
                ...state,
                inStock: state.products.map(product => {
                    if(product.name === action.payload.name){
                        product.inStock = product.inStock + 1;
                    }
                })
            }
        },
        [RESET]: (state, action) => {
            return state;
        }
    }
)

export const getProducts = () => async(dispatch, getState) => {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    console.log('initial data from getProducts', response.data.results)
    dispatch(setProducts(response.data.results));
}


// const initialState = {
//     products: [
//         { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
//         { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
//         { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
//         { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
//         { name: 'Apples', category: 'food', price: .99, inStock: 500 },
//         { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
//         { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
//     ],
// };

// function productsReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'CHANGE_CATEGORY':
//             return {
//                 ...state,
//                 products: initialState.products.filter(product => product.category === action.payload.name),
//             };
//         case 'ADD_TO_CART':
//             return {
//                 ...state,
//                 inStock: state.products.map(product => {
//                     if (product.name === action.payload.name) {
//                         product.inStock = product.inStock - 1;
//                     }
//                 })
//             };
//         case 'REMOVE_FROM_CART':
//             return {
//                 ...state,
//                 inStock: state.products.map(product => {
//                     if (product.name === action.payload.name) {
//                         product.inStock = product.inStock + 1;
//                     }
//                 })
//             };
//         case 'RESET':
//             return initialState;
//         default:
//             return state;
//     }
// }

export default productsReducer;