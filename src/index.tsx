import * as React from 'react';
import * as ReactDOM from 'react-dom';

// third-party libraries
import { CookiesProvider } from 'react-cookie';

// components
import App from './App';

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById('app')
);
