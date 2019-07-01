import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import Materialize
import * as M from 'materialize-css';

// third party packages
import { withCookies } from 'react-cookie';
import { Provider } from 'react-redux';

// components
import Routes from '../routes';
import store from '../store';

class App extends React.Component<{}, null> {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default withCookies(App);
