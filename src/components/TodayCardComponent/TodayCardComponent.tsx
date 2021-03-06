import React from 'react';
import classes from './TodayCardComponent.module.scss';
import { IconId, iconMap } from '../../store/weather-slice';

import {
  FiSunrise as Sunrise,
  FiSunset as Sunset,
  FiWind as Wind,
  FiDroplet as Drop,
} from 'react-icons/fi';

const TodayCard: React.FC<{
  iconId: IconId;
  description: string;
  date: string;
  temp: {
    min: string;
    now: string;
    max: string;
  };
  sunrise: string;
  sunset: string;
  windSpeed: number;
  humidity: number;
}> = ({
  iconId,
  description,
  date,
  temp,
  sunrise,
  sunset,
  windSpeed,
  humidity,
}) => {
  console.log(
    date,
    description,
    date,
    temp,
    sunrise,
    sunset,
    windSpeed,
    humidity,
    iconId,
  );
  const Icon = iconMap[iconId];

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <Icon className={classes['icon-large']} />
        <p className="p-1">{description}</p>
        <h3 className="header-3">Today ({date})</h3>
      </div>

      <div className={classes.med}>
        <div className={classes.labels}>
          <span className={`${classes.label} ${classes['label--small']}`}>
            Min
          </span>
          <span className={`${classes.label} ${classes['label--large']}`}>
            Now
          </span>
          <span className={`${classes.label} ${classes['label--small']}`}>
            Max
          </span>
        </div>
        <div className={classes.nums}>
          <span className={`${classes.num} ${classes[`num--small`]}`}>
            {temp.min}
          </span>
          <span className={`${classes.num} ${classes[`num--large`]}`}>
            {temp.now}
          </span>
          <span className={`${classes.num} ${classes[`num--small`]}`}>
            {temp.max}
          </span>
        </div>
      </div>

      <div className={classes.footer}>
        <div className={classes['list-item']}>
          <Sunrise className={classes['icon-small']} />
          <span>{sunrise}</span>
        </div>
        <div className={classes['list-item']}>
          <Sunset className={classes['icon-small']} />
          <span>{sunset}</span>
        </div>
        <div className={classes['list-item']}>
          <Wind className={classes['icon-small']} />
          <span>{windSpeed}km/h</span>
        </div>
        <div className={classes['list-item']}>
          <Drop className={classes['icon-small']} />
          <span>{humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default TodayCard;
