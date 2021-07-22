import React from 'react';
import { TodayCardComponent } from '../components';
import { useAppSelector } from '../hooks';
import { getDay, getHour } from '../utils/date-utils';
import { getF } from '../utils/weather-utils';

const TodayCardContainer = () => {
  const type = useAppSelector(state => state.weather.type);

  const {
    dt,
    iconId,
    description,
    temp: { min, now, max },
    sunrise,
    sunset,
    windSpeed,
    humidity,
  } = useAppSelector(state => state.weather.data!.today);

  const date = getDay(dt);

  const deg = type === 'C' ? '℃' : '℉';

  const temp = {
    min: Math.round((() => (type === 'C' ? min : getF(min)))()) + deg,
    now: Math.round((() => (type === 'C' ? now : getF(now)))()) + deg,
    max: Math.round((() => (type === 'C' ? max : getF(max)))()) + deg,
  };

  return (
    <TodayCardComponent
      iconId={iconId}
      date={date}
      description={description}
      temp={temp}
      sunrise={getHour(sunrise)}
      sunset={getHour(sunset)}
      windSpeed={Math.round(windSpeed * 3.6)}
      humidity={humidity}
    />
  );
};

export default TodayCardContainer;
