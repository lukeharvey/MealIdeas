import React from 'react';
import { Provider } from 'react-redux';

import Root from './components/Root';
import reduxStore from './store/reduxStore';

const App = () => (
  <Provider store={reduxStore}>
    <Root />
  </Provider>
);

export default App;
