import React from 'react';
import classes from './HeaderComponent.module.scss';
import { Link } from 'react-router-dom';

import { FiSearch as Search } from 'react-icons/fi';

import { useAppSelector } from '../../hooks';

function LoadingSpinner() {
  return <div className={classes['loading-spinner']}></div>;
}

interface InputSearchProps {
  value: string;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({
  value,
  onValueChange,
  onSubmit,
}) => {
  const isLoading = useAppSelector(state => state.location.http.isLoading);

  return (
    <form className={classes['input-search']} onSubmit={onSubmit}>
      {isLoading ? <LoadingSpinner /> : <Search className={classes.icon} />}
      <input
        type="search"
        placeholder="Type the City Name"
        value={value}
        onChange={onValueChange}
        className={`${classes['input']} ${classes['input--desktop-tablet']}`}
      />
      <input
        type="search"
        placeholder="City Name..."
        value={value}
        onChange={onValueChange}
        className={`${classes['input']} ${classes['input--mobile']}`}
      />
      <button type="submit"></button>
    </form>
  );
};

const InputToggle: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  const type = useAppSelector(state => state.weather.type);

  return (
    <div className={classes['input-toggle']} onClick={onToggle}>
      <div className={`${classes.slider} ${classes[`slider--${type}`]}`}>
        {type}
      </div>
    </div>
  );
};

const HeaderComponent: React.FC<{
  inputSearchProps: InputSearchProps;
  onTypeToggle: () => void;
}> = ({ inputSearchProps, onTypeToggle }) => {
  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <Link to="/" className={classes.logo}>
          <h1 className="header-1">Weather.io</h1>
        </Link>
        <InputSearch {...inputSearchProps} />
        <InputToggle onToggle={onTypeToggle} />
      </div>
    </div>
  );
};

export default HeaderComponent;
