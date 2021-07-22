import React from 'react';
import WeekCardsListComponent from '../components/WeekCardsListComponent/WeekCardsListComponent';
import { useAppSelector } from '../hooks';
import { getWeekday } from '../utils/date-utils';
import { getF } from '../utils/weather-utils';

const WeekCardsListContainer = () => {
  const type = useAppSelector(state => state.weather.type);
  const weekdays = useAppSelector(state => state.weather.data!.weekdays);

  return (
    <WeekCardsListComponent
      items={weekdays.map(weekday => {
        const date = getWeekday(weekday.dt);

        const deg = type === 'C' ? '℃' : '℉';

        const temp = {
          min:
            Math.round(
              (() =>
                type === 'C' ? weekday.temp.min : getF(weekday.temp.min))(),
            ) + deg,
          max:
            Math.round(
              (() =>
                type === 'C' ? weekday.temp.max : getF(weekday.temp.max))(),
            ) + deg,
        };

        return {
          iconId: weekday.iconId,
          date,
          description: weekday.description,
          temp,
          humidity: weekday.humidity,
          windSpeed: Math.round(weekday.windSpeed * 3.6),
        };
      })}
    />
  );
};

export default WeekCardsListContainer;
