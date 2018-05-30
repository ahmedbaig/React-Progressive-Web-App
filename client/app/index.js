import React, {Fragment} from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


import register from './registerServiceWorker';

import App from './components/app'
import NotFound from './components/notfound'

render((
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
    </Switch>
  </Router>
), document.getElementById('app'));
register();
