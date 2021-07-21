import { Data } from '../store/location-slice';

const getLocationData = async (cityName: string): Promise<Data> => {
  const request = await fetch(
    `https://nominatim.openstreetmap.org/search?city=${cityName}&limit=1&format=json`,
  );

  const data = await request.json();

  if (data.length === 0) {
    console.log('hello');
    throw new Error();
  }

  const [{ display_name: name, lat, lon }] = data;

  return { name, coords: [+lat, +lon] };
};

export default getLocationData;
