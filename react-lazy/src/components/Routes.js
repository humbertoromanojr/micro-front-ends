import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const Routes = () => (
  <Router basename="react-lazy">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  </Router>
)

export default Routes;