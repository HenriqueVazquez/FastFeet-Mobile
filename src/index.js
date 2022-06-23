import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { store, persistor } from './store';

import colors from './styles/colors';
import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
