import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './photosSlice.js'

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});
