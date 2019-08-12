import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home'

export default function App() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>{' '}
        </nav>

        <div>
          <Route exact path='/' component={Home} />
        </div>
      </Router>
      );
}
