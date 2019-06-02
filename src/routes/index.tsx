// react libraries
import * as React from 'react';

// third party packages
import { BrowserRouter as Router, HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

// components
import NavigationBar from '../components/NavigationBar';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

const Routes = () => (
  <Router>
    <div className="container">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/new" component={ProductsPage} />
        <Route path="/men" component={ProductsPage} />
        <Route path="/women" component={ProductsPage} />
        <Route path="/trending" component={ProductsPage} />
        <Route path="/top-search" component={ProductsPage} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
