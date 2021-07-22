import { TodayData, WeekDayData, Data } from '../store/weather-slice';

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

const getWeekData = (data: any[]): WeekDayData[] => {
  let result = data.map(
    ({
      dt,
      weather: [{ icon: iconId, description }],
      temp: { min, max },
      wind_speed: windSpeed,
      humidity,
    }): WeekDayData => {
      return {
        dt: dt * 1000,
        iconId,
        description,
        temp: { min, max },
        windSpeed,
        humidity,
      };
    },
  );

  return result.slice(0, -2);
};

const getWeatherData = async (coords: [number, number]): Promise<Data> => {
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&exclude=minutely,hourly,alerts&units=metric&appid=88b7a16ce2b657eab11842a9ddc2411d`,
  );

  const data = await request.json();

  const today = getTodayData(data);

  const weekdays = getWeekData(data.daily);

  return { today, weekdays };
};

export default getWeatherData;
