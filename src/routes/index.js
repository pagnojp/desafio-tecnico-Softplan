import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Character from '../pages/character';
import EditCharacter from '../pages/edit';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/character/:id" component={(routerProps) => <Character id={routerProps.match.params.id} />} />

    <Route path="/edit/1" component={EditCharacter} />
  </Switch>
);

export default Routes;
