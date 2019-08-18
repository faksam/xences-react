// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './AccountPage.scss';

// components
import { Tab, Tabs } from 'react-materialize';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';

export class AccountPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="AccountPage">
          <Tabs class="tabs">
            <Tab title="Sign In" active>
              <SignInForm />
            </Tab>
            <Tab title="Sign Up">
              <SignUpForm />
            </Tab>
          </Tabs>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountPage;
