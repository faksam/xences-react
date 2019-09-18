// import libraries
import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// third-party libraries

// styles
import './AccountPage.scss';

// components
import {
  Button,
  Card,
  Col,
  Collection,
  CollectionItem,
  Row,
  TextInput
} from 'react-materialize';
import AccountDetails from '../../components/AccountDetails';

// interfaces
import { AccountPageProps, AccountPageState } from './interfaces';

export class AccountPage extends React.Component<AccountPageProps, AccountPageState> {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;

    return (
      <React.Fragment>
        <div className="account-page">
          <Row>
            <Col s={4}>
              <Collection>
                <CollectionItem><Link to={`${match.url}`}>My Account</Link></CollectionItem>
                <CollectionItem><Link to={`${match.url}/orders`}>My Orders</Link></CollectionItem>
                <CollectionItem><Link to={`${match.url}/shop`}>My Shop</Link></CollectionItem>
                <CollectionItem><Link to={`${match.url}/products`}>My Products</Link></CollectionItem>
              </Collection>
            </Col>
            <Col s={8}>
              <Card>
                <Switch>
                  <Route
                    exact
                    path={`${match.url}`}
                    component={AccountDetails}
                  />
                  <Route
                    path={`${match.url}/orders`}
                    component={AccountDetails}
                  />
                  <Route
                    path={`${match.url}/shop`}
                    component={AccountDetails}
                  />
                  <Route
                    path={`${match.url}/products`}
                    component={AccountDetails}
                  />
                </Switch>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountPage;
