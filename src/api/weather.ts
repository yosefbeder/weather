import { TodayData, Data } from '../store/weather-slice';

const getTodayData = (data: any): TodayData => {
  const {
    current: {
      dt,
      sunrise,
      sunset,
      temp: now,
      humidity,
      wind_speed: windSpeed,
      weather: [{ icon: iconId, description }],
    },
    daily: [
      {
        temp: { min, max },
      },
    ],
  } = data;

  return {
    dt: dt * 1000,
    iconId,
    description,
    temp: { min, now, max },
    sunrise: sunrise * 1000,
    sunset: sunset * 1000,
    windSpeed,
    humidity,
  };
};

const getWeatherData = async (coords: [number, number]): Promise<Data> => {
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&exclude=minutely,hourly,alerts&units=metric&appid=a274453be9598521a3c0b4e4698873e3`,
  );

  const data = await request.json();

  const today = getTodayData(data);

  return { today };
};

export default getWeatherData;
