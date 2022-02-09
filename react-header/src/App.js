import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const App = ({ name }) => (
  <Router>
    <header>
    <h1>{name}</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/react-single">Single</Link></li>
        <li><Link to="/react-lazy">Lazy</Link></li>
        <li><Link to="/react-multiples">Multiples</Link></li>
        <li><Link to="/react-form">Form</Link></li>
      </ul>
    </nav>
    </header>
  </Router>
)

export default App;