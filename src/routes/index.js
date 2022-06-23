import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '~/pages/SignIn';

import DashboardRoutes from './Dashboard.routes';

const Stack = createNativeStackNavigator();

export default function Routes(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator
      screenOptions={() => ({
        animation: 'none',
        headerShown: false,
      })}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      initialRouteName="Entregas"
      screenOptions={() => ({
        animation: 'none',
        headerShown: false,
      })}>
      <Stack.Screen name="Dashboard" component={DashboardRoutes} />
    </Stack.Navigator>
  );
}
