import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Character from '../pages/character';
import EditCharacter from '../pages/edit';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/character/1" component={Character} />
    <Route path="/edit/1" component={EditCharacter} />
  </Switch>
);

export default Routes;
