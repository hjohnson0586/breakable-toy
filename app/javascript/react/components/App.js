import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';

import BuildIndex from '../containers/BuildIndex'
import PartIndex from '../containers/PartIndex'

export const App = (props) => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={BuildIndex}/>
    <Route path="/builds" component={BuildIndex}/>
    <Route path="/builds/:id" component={PartIndex}/>
  </Router>
  )
}
export default App
