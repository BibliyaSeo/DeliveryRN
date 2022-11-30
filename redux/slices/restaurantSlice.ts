import {createSlice} from '@reduxjs/toolkit';
import {IRestaurantCard} from '../../components/RestaurantCard';
import type {RootState} from '../store';

// Define a type for the slice state
interface RestaurantState {
  restaurant: IRestaurantCard;
}

// Define the initial state using that type
const initialState: RestaurantState = {
  restaurant: {
    id: '',
    imgUrl: '',
    title: '',
    rating: 0,
    genre: '',
    address: '',
    short_description: '',
    dishes: [],
    lat: 0,
    long: 0,
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const {setRestaurant} = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
