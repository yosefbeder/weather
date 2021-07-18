import { AppDispatch } from '../store';
import { weatherActions } from '../store/weather-slice';

export const fetchWeatherData = (coords: [number, number]) => {
  return async (dispatch: AppDispatch) => {
    console.log('started fetching');
    dispatch(weatherActions.pending());

    try {
      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&exclude=minutely,hourly,alerts&appid=a274453be9598521a3c0b4e4698873e3`,
      );

      // TODO: filter this silly object and store the result in the data object then set it normally
      const data = await request.json();

      dispatch(weatherActions.fulfilled(data));
    } catch (err) {
      dispatch(weatherActions.rejected());
    }
  };
};
