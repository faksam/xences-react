// react libraries
import * as React from 'react';

// third party packages
import { BrowserRouter as Router, HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

// components
import NavigationBar from '../components/NavigationBar';
import { AccountPage } from '../pages/AccountPage';
import { AuthPage } from '../pages/AuthPage';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { ProductsPage } from '../pages/ProductsPage';

const Routes = (props: any) => {
  return (
    <Router>
      <div className="container">
        <NavigationBar { ...{ auth: props.auth } } />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/new" component={ProductsPage} />
          <Route path="/men" component={ProductsPage} />
          <Route path="/women" component={ProductsPage} />
          <Route path="/trending" component={ProductsPage} />
          <Route path="/top-search" component={ProductsPage} />
          <Route path="/buy" component={ProductDetailsPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/account" component={AccountPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
