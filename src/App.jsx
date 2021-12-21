import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" />

      </Switch>
    </Router>
  )
}

export default App
