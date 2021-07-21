import React from 'react';

import Header from '../containers/HeaderContainer';
import { Layout } from '../components';
import Loading from '../containers/LoadingContainer';

import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import fetchLocationData from '../store/location-slice';
import fetchWeatherData from '../store/weather-slice';

const CityWeather = () => {
  const dispatch = useAppDispatch();

  const { cityName } = useParams<{ cityName: string }>();

  const location = useAppSelector(state => state.location.data);
  const weather = useAppSelector(state => state.weather.data);

  const locationHttp = useAppSelector(state => state.location.http);
  const weatherHttp = useAppSelector(state => state.weather.http);

  const isLoaded =
    !locationHttp.isLoading &&
    !weatherHttp.isLoading &&
    !locationHttp.hasError &&
    !weatherHttp.hasError &&
    weather;

  useEffect(() => {
    if (cityName) {
      dispatch(fetchLocationData(cityName));
    }
  }, [dispatch, cityName]);

  useEffect(() => {
    if (location?.coords) {
      dispatch(fetchWeatherData(location.coords));
    }
  }, [dispatch, location]);

  return (
    <>
      <Header />
      {isLoaded ? (
        <Layout />
      ) : (
        <Loading
          isLoading={locationHttp.isLoading || weatherHttp.isLoading}
          hasError={locationHttp.hasError || weatherHttp.hasError}
          stage={
            locationHttp.isLoading
              ? 'location'
              : weatherHttp.isLoading
              ? 'weather'
              : 'location'
          }
        />
      )}
    </>
  );
};

export default CityWeather;
