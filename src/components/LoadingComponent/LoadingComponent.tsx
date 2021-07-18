import React from 'react';
import classes from './LoadingComponent.module.scss';

const LoadingSpinner: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div
      className={`${classes['loading-spinner']} ${
        isLoading && classes['loading-spinner--loading']
      }`}
    >
      <h2 className={`${classes.header} header-2`}>Weather.io</h2>
    </div>
  );
};

const LoadingComponent: React.FC<{
  isLoading: boolean;
  state: string;
  message: string;
}> = ({ isLoading, state, message }) => {
  return (
    <div className={classes.container}>
      <LoadingSpinner isLoading={isLoading} />
      <h3 className="header-3">{state}</h3>
      <p className="p-1">{message}</p>
    </div>
  );
};

export default LoadingComponent;
