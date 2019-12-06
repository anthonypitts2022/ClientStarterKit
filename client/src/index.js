import React from 'react';
import ReactDOM from 'react-dom';
import ClockInClockOutPage from './pages/ClockInClockOutPage';
import Login from './pages/Login';
import Returning from './pages/returning';
import Checkout from './pages/checkout';
import Page404 from './pages/Page404';
import * as serviceWorker from './config/serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ClockInClockOutPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/returning" component={Returning} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
