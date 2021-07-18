import { locationActions } from '../store/location-slice';
import { AppDispatch } from '../store';
import { weatherActions } from '../store/weather-slice';

export const fetchLocationData = (cityName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(locationActions.reset());
    dispatch(weatherActions.reset());

    dispatch(locationActions.pending());

    try {
      const request = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${cityName}&limit=1&format=json`,
      );

      const data = await request.json();

      if (data.length === 0) {
        console.log('hello');
        throw new Error();
      }

      const [{ display_name: name, lat, lon }] = data;

      dispatch(locationActions.fulfilled({ name, coords: [+lat, +lon] }));
    } catch (err) {
      dispatch(locationActions.rejected());
    }
  };
};
