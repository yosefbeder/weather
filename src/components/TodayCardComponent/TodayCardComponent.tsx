import React from 'react';
import classes from './TodayCardComponent.module.scss';
import { IconId } from '../../store/weather-slice';

import {
  IoSunnyOutline,
  IoPartlySunnyOutline,
  IoCloudyOutline,
  IoRainyOutline,
  IoThunderstormOutline,
  IoSnowOutline,
  IoEyeOffOutline,
} from 'react-icons/io5';

import { FiSunrise, FiSunset, FiWind, FiDroplet } from 'react-icons/fi';

const iconMap = {
  '01d': IoSunnyOutline,
  '02d': IoPartlySunnyOutline,
  '03d': IoCloudyOutline,
  '04d': IoCloudyOutline,
  '05d': IoRainyOutline,
  '06d': IoThunderstormOutline,
  '07d': IoSnowOutline,
  '50d': IoEyeOffOutline,
};

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
  const Icon = iconMap[iconId];

  return (
    <div className={classes.card}>
      <section className={classes.header}>
        <Icon className={classes['icon-large']} />
        <p className="p-1">{description}</p>
        <h3 className="header-3">Today ({date})</h3>
      </section>

      <section className={classes.med}>
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
      </section>

      <section className={classes.footer}>
        <div className={classes['list-item']}>
          <FiSunrise className={classes['icon-small']} />
          <span>{sunrise}</span>
        </div>
        <div className={classes['list-item']}>
          <FiSunset className={classes['icon-small']} />
          <span>{sunset}</span>
        </div>
        <div className={classes['list-item']}>
          <FiWind className={classes['icon-small']} />
          <span>{windSpeed}km/h</span>
        </div>
        <div className={classes['list-item']}>
          <FiDroplet className={classes['icon-small']} />
          <span>{humidity}%</span>
        </div>
      </section>
    </div>
  );
};

export default TodayCard;
