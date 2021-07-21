import React from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router';

const App = () => {
  return (
    <Switch>
      {routes.map(({ path, component }, key) => (
        <Route path={path} exact component={component} key={key} />
      ))}
    </Switch>
  );
};

export default App;
