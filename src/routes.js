import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';

import LandingScreen from './components/LandingScreen';

export default (
  <Route path="/" component={App}>
<Route path='/landingscreen' component={LandingScreen}/>
  </Route>
);
