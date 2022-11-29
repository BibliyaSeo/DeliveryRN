import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface BasketState {
  items: any;
}

// Define the initial state using that type
const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.items = [];
    },
  },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;

export default basketSlice.reducer;
