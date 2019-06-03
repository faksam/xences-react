import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import Materialize
import * as M from 'materialize-css';

// third-party libraries
import { Provider } from 'react-redux';

// components
import NavigationBar from '../components/NavigationBar';
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

export default App;
