import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'shared/components/layouts/Header';
import ProductDetails from './routes/ProductDetails/index';
import Cart from './routes/Cart/index';
import Dashboard from './routes/Dashboard';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path='/home' component={Dashboard} />
        <Route path='/product/:id' component={ProductDetails} />
        <Route path='/cart' component={Cart} />
        <Redirect from='*' to='/home' />
      </Switch>
    </Fragment>
  );
};

export default Main;
