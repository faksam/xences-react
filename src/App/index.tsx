import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import Materialize
import * as M from 'materialize-css';

// components
import Routes from '../routes';

// interfaces
import { AppProps, AppState } from './interfaces';

class App extends React.Component<AppProps, AppState> {
  componentDidMount() {
    // Auto initialize all the things Materialize!
    M.AutoInit();
  }

  render() {
    return (
      <Routes {...this.props}/>
    );
  }
}

export default App;
