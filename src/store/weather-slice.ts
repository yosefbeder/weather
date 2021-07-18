import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TODO: Change this type into the type that includes that things that you will need to use in this app
interface Data {}

const initialState: {
  http: {
    isLoading: boolean;
    hasError: boolean;
  };
  type: 'C' | 'F';
  data: Data | null;
} = {
  http: {
    isLoading: false,
    hasError: false,
  },
  type: 'C',
  data: null,
};

const slice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    toggleType(state) {
      state.type = state.type === 'C' ? 'F' : 'C';
    },
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

export const weatherReducer = slice.reducer;
export const weatherActions = slice.actions;
