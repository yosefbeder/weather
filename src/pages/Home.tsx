import React from 'react';
import Header from '../containers/HeaderContainer';
import Loading from '../containers/LoadingContainer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Loading stage="before-searching" />
    </>
  );
}
