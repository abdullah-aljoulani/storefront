
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import { configureStore } from '@reduxjs/toolkit';

const store = () => configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  }
});


export default store();