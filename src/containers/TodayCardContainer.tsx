import React from 'react';
import { TodayCardComponent } from '../components';
import { useAppSelector } from '../hooks';

const getHour = (date: Date) =>
  new Intl.DateTimeFormat('en-us', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);

const getF = (C: number) => (C * 9) / 5 + 32;

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

  const date = new Intl.DateTimeFormat('en-us', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(new Date(dt));

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
      sunrise={getHour(new Date(sunrise))}
      sunset={getHour(new Date(sunset))}
      windSpeed={Math.round(windSpeed * 3.6)}
      humidity={humidity}
    />
  );
};

export default TodayCardContainer;
