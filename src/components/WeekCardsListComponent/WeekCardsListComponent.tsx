import React from 'react';
import classes from './WeekCardListContainer.module.scss';
import { IconId, iconMap } from '../../store/weather-slice';

import { FiWind as Wind, FiDroplet as Drop } from 'react-icons/fi';
import { useEffect } from 'react';

const Card: React.FC<{
  iconId: IconId;
  description: string;
  date: string;
  temp: { min: string; max: string };
  windSpeed: number;
  humidity: number;
}> = ({ iconId, description, date, temp, windSpeed, humidity }) => {
  const Icon = iconMap[iconId];

  useEffect(() => {
    console.log('some components mounted');
  });

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <Icon className={classes['icon-large']} />
        <p className="p-1">{description}</p>
        <h3 className="header-3">{date}</h3>
      </div>
      <div className={classes.med}>
        <div className={classes.labels}>
          <span className={`${classes.label} ${classes['label--small']}`}>
            Min
          </span>
          <span className={`${classes.label} ${classes['label--small']}`}>
            Max
          </span>
        </div>
        <div className={classes.nums}>
          <span className={`${classes.num} ${classes[`num--small`]}`}>
            {temp.min}
          </span>
          <span className={`${classes.num} ${classes[`num--small`]}`}>
            {temp.max}
          </span>
        </div>
      </div>
      <div className={classes.footer}>
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

const WeekCardsListComponent: React.FC<{
  items: {
    iconId: IconId;
    description: string;
    date: string;
    temp: {
      min: string;
      max: string;
    };

    windSpeed: number;
    humidity: number;
  }[];
}> = ({ items }) => {
  return (
    <div className={classes.container}>
      {items.map((item, index) => {
        return <Card key={index} {...item} />;
      })}{' '}
    </div>
  );
};

export default WeekCardsListComponent;
