import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Home = React.lazy(() => import('../pages/Home'));

const Routes = () => (
  <Suspense fallback={<h2>Loading...</h2>}>
    <Router basename="react-lazy">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  </Suspense>
)

export default Routes;