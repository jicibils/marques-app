import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home/HomeContainer';
import AllRubros from '../components/Rubros/AllRubros';
import ScrollToTop from './Scroll';

export default function rootRoutes() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rubros" component={AllRubros} />
      </Switch>
    </main>
  );
}
