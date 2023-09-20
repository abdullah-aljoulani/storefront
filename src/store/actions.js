import { createAction } from '@reduxjs/toolkit';
import { CHANGE_CATEGORY, ADD_TO_CART, REMOVE_FROM_CART, RESET } from './constants';

export const changeCategory = createAction(CHANGE_CATEGORY);
export const addToCart = createAction(ADD_TO_CART);
export const removeFromCart = createAction(REMOVE_FROM_CART);
export const reset = createAction(RESET);