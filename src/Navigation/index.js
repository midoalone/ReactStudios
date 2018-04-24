import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from '../Containers/HomeScreen';
import SecondScreen from '../Containers/SecondScreen';

const routes = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen} />
    <Route path='/query_builder' component={SecondScreen} />
  </Switch>
);

export default routes;