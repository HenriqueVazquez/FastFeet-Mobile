/* eslint import/no-unresolved: [2, { ignore: ['\@env$'] }] */
import { HostIP as ip } from '@env';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it fro
    .configure(ip ? { host: `${ip}` } : '') // controls connection & communication settings, inform your IP
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  tron.clear();

  console.tron = tron;
}
