import OneSignal from 'react-native-onesignal';
import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import CodePush from 'react-native-code-push';

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { store, persistor } from './store';

import colors from './styles/colors';
import App from './App';

function Index() {
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId('86c6b435-2416-47c9-a40d-670daf0310b2');

  // Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler(
    notificationReceivedEvent => {
      console.tron.log(
        'OneSignal: notification will show in foreground:',
        notificationReceivedEvent,
      );
      const notification = notificationReceivedEvent.getNotification();
      console.tron.log('notification: ', notification);
      const data = notification.additionalData;
      console.tron.log('additionalData: ', data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);
    },
  );

  // Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.tron.log('OneSignal: notification opened:', notification);
  });

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
