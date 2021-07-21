import React from 'react';
import Header from '../containers/HeaderContainer';
import Loading from '../containers/LoadingContainer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Loading stage="before-searching" />
    </>
  );
};

export default HomePage;
