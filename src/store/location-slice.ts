import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '.';

interface Data {
  coords: [number, number];
  name: string;
}

const initialState: {
  http: {
    isLoading: boolean;
    hasError: boolean;
  };
  data: Data | null;
} = {
  http: {
    isLoading: false,
    hasError: false,
  },
  data: null,
};

const slice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    reset(state) {
      state.data = null;
    },
    pending(state) {
      state.http.isLoading = true;
      state.http.hasError = false;
    },
    fulfilled(state, action: PayloadAction<Data>) {
      state.http.isLoading = false;
      state.data = action.payload;
    },
    rejected(state) {
      state.http.isLoading = false;
      state.http.hasError = true;
      state.data = null;
    },
  },
});

export const locationReducer = slice.reducer;
export const locationActions = slice.actions;
