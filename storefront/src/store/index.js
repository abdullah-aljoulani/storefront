import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';
import productsReducer from './products';

let reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();