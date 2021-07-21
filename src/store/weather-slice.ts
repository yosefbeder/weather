import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '.';
import getWeatherData from '../api/weather';

// TODO: Change this type into the type that includes that things that you will need to use in this app
type IconId = '01d' | '02d' | '03d' | '04d' | '05d' | '06d' | '07d' | '50d';

interface TodayData {
  dt: number;
  iconId: IconId;
  description: string;
  temp: {
    min: number;
    now: number;
    max: number;
  };
  sunrise: number;
  sunset: number;
  windSpeed: number;
  humidity: number;
}

interface Data {
  today: TodayData;
}

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

const fetchWeatherData = createAsyncThunk<
  Data,
  [number, number],
  { dispatch: AppDispatch }
>('weather/fetchWeatherDataStatus', async (coords: [number, number]) => {
  return await getWeatherData(coords);
});

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
  },
  extraReducers: builder => {
    builder.addCase(fetchWeatherData.pending, state => {
      state.http.isLoading = true;
      state.http.hasError = false;
    });

    builder.addCase(
      fetchWeatherData.fulfilled,
      (state, action: PayloadAction<Data>) => {
        state.http.isLoading = false;
        state.data = action.payload;
      },
    );

    builder.addCase(fetchWeatherData.rejected, state => {
      state.http.isLoading = false;
      state.http.hasError = true;
      state.data = null;
    });
  },
});

export const { reducer, actions } = slice;
export type { TodayData, Data, IconId };

export default fetchWeatherData;
