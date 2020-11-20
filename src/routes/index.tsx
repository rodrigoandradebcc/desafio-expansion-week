import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { Container } from './styles';

import Landing from '../pages/Landing';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
  </Switch>
);

export default Routes;
