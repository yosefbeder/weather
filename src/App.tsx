import React from 'react';
import routes from './routes';

import { Switch, Route } from 'react-router';

export default function App() {
  return (
    <Switch>
      {routes.map(({ path, component }, key) => (
        <Route path={path} exact component={component} key={key} />
      ))}
    </Switch>
  );
}
