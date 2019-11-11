import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Character from '../pages/character';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/character/1" component={Character} />
  </Switch>
);

export default Routes;
