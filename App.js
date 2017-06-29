import React from 'react';
import { Provider } from 'react-redux';

import Router from './components/Router';
import reduxStore from './store/reduxStore';

const App = () => (
  <Provider store={reduxStore}>
    <Router />
  </Provider>
);

export default App;
