// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './AuthPage.scss';

// components
import { Tab, Tabs } from 'react-materialize';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';

export class AuthPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="AuthPage">
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

export default AuthPage;
