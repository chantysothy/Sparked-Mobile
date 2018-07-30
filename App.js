import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './src/helpers/connectMeteor';
import rootReducer from './src/reducers/combinedReducers';
import AppStackNavigator from './src/screens/AppStack';

export const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <AppStackNavigator />
  </Provider>
);

export default App;
