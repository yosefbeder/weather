import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '.';
import getLocationData from '../api/location';
import { actions as weatherActions } from './weather-slice';

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

const fetchLocationData = createAsyncThunk<
  Data,
  string,
  { dispatch: AppDispatch }
>('location/fetchLocationDataStatus', async (cityName: string, thunkApi) => {
  thunkApi.dispatch(actions.reset());
  thunkApi.dispatch(weatherActions.reset());

  return await getLocationData(cityName);
});

const slice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    reset(state) {
      state.data = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLocationData.pending, state => {
      state.http.isLoading = true;
      state.http.hasError = false;
    });

    builder.addCase(
      fetchLocationData.fulfilled,
      (state, action: PayloadAction<Data>) => {
        state.http.isLoading = false;
        state.data = action.payload;
      },
    );

    builder.addCase(fetchLocationData.rejected, state => {
      state.http.isLoading = false;
      state.http.hasError = true;
      state.data = null;
    });
  },
});

export const { reducer, actions } = slice;
export type { Data };

export default fetchLocationData;
