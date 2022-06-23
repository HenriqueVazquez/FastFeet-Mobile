/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PropTypes from 'prop-types';

import CreateProblem from '~/pages/CreateProblem';
import Problems from '~/pages/Problems';
import Deliveries from '~/pages/Deliveries';
import DeliveryConfirmPhoto from '~/pages/DeliveryConfirmPhoto';
import DeliveryDetails from '~/pages/DeliveryDetails';

import ArrowLeftMenu from '~/components/ArrowLeftMenu';

const Stack = createNativeStackNavigator();

export default function DeliveryRoutes({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        animation: 'none',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,

        headerLeft: () => (
          <ArrowLeftMenu
            navigate={() => {
              navigation.goBack();
            }}
          />
        ),
      }}
      initialRouteName="Entrega">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Entrega"
        component={Deliveries}
      />
      <Stack.Screen
        name="Detalhes"
        options={{
          title: 'Detalhes da encomenda',
        }}
        component={DeliveryDetails}
      />
      <Stack.Screen
        name="ConfirmPhoto"
        options={{
          title: 'Confirmar entrega',
        }}
        component={DeliveryConfirmPhoto}
      />
      <Stack.Screen
        name="CreateProblem"
        options={{
          title: 'Informar problema',
        }}
        component={CreateProblem}
      />
      <Stack.Screen
        name="Problems"
        options={{
          title: 'Visualizar problemas',
        }}
        component={Problems}
      />
    </Stack.Navigator>
  );
}

DeliveryRoutes.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
