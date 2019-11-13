import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Character from '../pages/character';
import EditCharacter from '../pages/edit';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/character/:id" component={Character} />
    <Route path="/edit/:id" component={EditCharacter} />
    <Route render={() => <h2>404 página não encontrada :(</h2>} />
  </Switch>
);

export default Routes;
