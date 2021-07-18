import { configureStore } from '@reduxjs/toolkit';
import { locationReducer } from './location-slice';
import { weatherReducer } from './weather-slice';

const store = configureStore({
  reducer: { location: locationReducer, weather: weatherReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
