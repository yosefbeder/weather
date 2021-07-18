import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { HeaderComponent } from '../components';
import { useAppDispatch } from '../hooks';
import { weatherActions } from '../store/weather-slice';

export default function HeaderContainer() {
  const dispatch = useAppDispatch();

  const history = useHistory();
  const [cityName, setCityName] = useState('');

  const onCityNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCityName(e.target.value);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (cityName.length > 0) {
      history.push(`/city/${cityName}`);
      setCityName('');
    }
  };

  const inputSearchProps = {
    value: cityName,
    onValueChange: onCityNameChange,
    onSubmit: onSearch,
  };

  const onTypeToggle = () => dispatch(weatherActions.toggleType());

  return (
    <HeaderComponent
      inputSearchProps={inputSearchProps}
      onTypeToggle={onTypeToggle}
    />
  );
}
