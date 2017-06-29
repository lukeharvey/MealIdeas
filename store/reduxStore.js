import { compose, createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

import rootReducer from '../reducers/index';

const reduxStore = compose(autoRehydrate())(createStore)(rootReducer);

persistStore(reduxStore, { storage: AsyncStorage });

export default reduxStore;
