import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Product from './routes/Product';
import CenterClock from './routes/CenterClock';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/product" exact component={Product} />
        <Route path="/center" exact component={CenterClock}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
