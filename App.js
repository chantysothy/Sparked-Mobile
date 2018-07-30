import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/SignUpScreen';
import AppDrawerNavigator from './src/screens/DrawerNavigator';
import ViewResourceScreen from './src/screens/ViewResourceScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import VideoScreen from './src/screens/VideoScreen';
import ScreenTwo from './src/screens/TabNavigator/ScreenTwo';
import './src/helpers/connectMeteor';
import rootReducer from './src/reducers/combinedReducers';

// const allReducers = combineReducers({ healthCenterReducer, locationReducer });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ImagesScreen
export const store = createStore(persistedReducer);
const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppStackNavigator />
    </PersistGate>
  </Provider>
);

export default App;
const AppStackNavigator = new createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    RegisterScreen: {
      screen: RegisterScreen,
    },
    DrawerNavigator: {
      screen: AppDrawerNavigator,
    },
    ViewResourceScreen: {
      screen: ViewResourceScreen,
    },
    ImagesScreen: {
      screen: ImagesScreen,
    },
    VideoScreen: {
      screen: VideoScreen,
    },
    ScreenTwo: {
      screen: ScreenTwo,
      navigationOptions: {
        tabBarLabel: 'Resources',
      },
    },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      headerMode: 'screen',
    },
  },
);
