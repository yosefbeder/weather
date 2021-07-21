import React from 'react';
import TodayCard from '../../containers/TodayCardContainer';
import classes from './Layout.module.scss';
import { useAppSelector } from '../../hooks';

import { Link, Bold, IconLink } from '../../elements';

import {
  IoLogoFacebook as Facebook,
  IoLogoGithub as Github,
  IoLogoTwitter as Twitter,
} from 'react-icons/io5';

const Layout = () => {
  const location = useAppSelector(state => state.location.data);

  return (
    <main className={classes.main}>
      <h2 className={`${classes.header} header-2`}>{location!.name}</h2>
      <section className={classes['section-1']}>
        <h3 className="header-3">How does it work?</h3>

        <p className="p-1">
          I used{' '}
          <Link href="https://nominatim.org/release-docs/develop/">
            Nominatim
          </Link>{' '}
          for <Bold>Geocoding</Bold> (searching for the name of the city that
          you enter).
        </p>

        <p className="p-1">
          I used <Link href="https://openweathermap.org">OpenWeatherMap</Link>{' '}
          Which provides a free service called{' '}
          <Link href="https://openweathermap.org/api/one-call-api">
            One Call API
          </Link>{' '}
          that allows us to get data about weather for the next 7 days.
        </p>
      </section>
      <section className={classes['section-2']}>
        <h3 className="header-3">How to contact me?</h3>

        <p className="p-1">
          I don't use social media apps a lot, but these are my accounts if you
          want to check them out.
        </p>
        <p className="p-1">
          You can send me an email from{' '}
          <Link href="mailto:dryosefbeder@gmail.com">Here</Link>.
        </p>

        <div className={classes['icons-container']}>
          <IconLink
            href="https://github.com/yosefbeder"
            title="My Github account"
          >
            <Github />
          </IconLink>
          <IconLink
            href="https://www.facebook.com/profile.php?id=100046209875662"
            title="My Facebook account"
          >
            <Facebook />
          </IconLink>
          <IconLink
            href="https://twitter.com/Yosef52130920"
            title="My Twitter account"
          >
            <Twitter />
          </IconLink>
        </div>
      </section>
      <TodayCard />
    </main>
  );
};

export default Layout;
