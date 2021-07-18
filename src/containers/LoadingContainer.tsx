import React from 'react';
import { LoadingComponent } from '../components';
import { useAppSelector } from '../hooks';

const LoadingContainer: React.FC<{
  isLoading?: boolean;
  hasError?: boolean;
  stage: 'before-searching' | 'location' | 'weather';
}> = ({ isLoading, hasError, stage }) => {
  const cityName = useAppSelector(state => state.location.data?.name);

  const state = isLoading
    ? 'Loading...'
    : hasError
    ? 'Error :('
    : stage === 'before-searching'
    ? 'Search for any city that you want :)'
    : '';

  let message: string;

  message =
    'To get the weather of any city you need to first know what is it 🤓.';

  if (stage !== 'before-searching') {
    message = isLoading
      ? `Fetching data about the ${
          stage === 'weather' ? `weather in ${cityName!.split(' ')[0]}` : stage
        }.`
      : hasError
      ? `An Error happened while fetching the ${
          stage === 'weather' ? `weather in ${cityName!.split(' ')[0]}` : stage
        }.`
      : '';
  }

  return (
    <LoadingComponent
      isLoading={isLoading || false}
      state={state}
      message={message}
    />
  );
};

export default LoadingContainer;
