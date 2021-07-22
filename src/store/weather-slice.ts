import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '.';
import getWeatherData from '../api/weather';

import {
  IoSunnyOutline,
  IoPartlySunnyOutline,
  IoCloudyOutline,
  IoRainyOutline,
  IoThunderstormOutline,
  IoSnowOutline,
  IoEyeOffOutline,
  IoMoonOutline,
  IoCloudyNightOutline,
} from 'react-icons/io5';

// TODO: Change this type into the type that includes that things that you will need to use in this app
const iconMap = {
  '01d': IoSunnyOutline,
  '01n': IoMoonOutline,
  '02d': IoPartlySunnyOutline,
  '02n': IoCloudyNightOutline,
  '03d': IoCloudyOutline,
  '03n': IoCloudyOutline,
  '04d': IoCloudyOutline,
  '04n': IoCloudyOutline,
  '09d': IoRainyOutline,
  '09n': IoRainyOutline,
  '10d': IoRainyOutline,
  '10n': IoRainyOutline,
  '11d': IoThunderstormOutline,
  '11n': IoThunderstormOutline,
  '13d': IoSnowOutline,
  '13n': IoSnowOutline,
  '50d': IoEyeOffOutline,
  '50n': IoEyeOffOutline,
};

type IconId = keyof typeof iconMap;

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

interface WeekDayData {
  dt: number;
  iconId: IconId;
  description: string;
  temp: {
    min: number;
    max: number;
  };
  windSpeed: number;
  humidity: number;
}

interface Data {
  today: TodayData;
  weekdays: WeekDayData[];
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
export type { TodayData, WeekDayData, Data, IconId };
export { iconMap };

export default fetchWeatherData;
