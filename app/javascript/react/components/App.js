import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';

import BuildIndex from '../containers/BuildIndex'

export const App = (props) => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={BuildIndex}/>
  </Router>
  )
}
export default App
