import {createSlice} from '@reduxjs/toolkit';
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
      const index = state.items.findIndex(
        (item: any) => item.id === action.payload.id,
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`장바구니에 존재하지 않습니다!`);
      }
      state.items = newBasket;
    },
  },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (state: RootState, id: string) =>
  state.basket.items.filter((item: any) => item.id === id);

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce(
    (total: any, item: any) => (total += item.price),
    0,
  );

export default basketSlice.reducer;
