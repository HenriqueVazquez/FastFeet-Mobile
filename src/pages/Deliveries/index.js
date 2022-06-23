/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { parseISO, format } from 'date-fns';

import Avatar from '~/components/Avatar';
import Delivery from '~/components/Delivery';
import NamePhoto from '~/components/NamePhoto';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/authState';
import colors from '~/styles/colors';

import {
  Container,
  Profile,
  Welcome,
  Name,
  ActionContainer,
  TitleContainer,
  Menu,
  MenuTitle,
  Options,
  Option,
  List,
} from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [typeDeliveries, setTypeDeliveries] = useState('Pendentes');

  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const auth = useSelector(state => state.auth);

  function handleLogout() {
    dispatch(signOut());
  }

  function handlePending() {
    setTypeDeliveries('Pendentes');
  }

  function handleDelivered() {
    setTypeDeliveries('Entregues');
  }

  useFocusEffect(
    React.useCallback(() => {
      async function loadDeliveries() {
        if (!auth?.id) return;

        const response =
          typeDeliveries === 'Pendentes'
            ? await api.get(`/deliveryman/${auth?.id}/deliveries`, {
                params: {
                  delivered: false,
                },
              })
            : await api.get(`/deliveryman/${auth?.id}/deliveries`, {
                params: {
                  delivered: true,
                },
              });

        const data = response.data[1].map(delivery => ({
          ...delivery,
          start_date_formated: delivery.start_date
            ? format(parseISO(delivery?.start_date), 'dd/MM/yyyy')
            : '- - / - - / - -',
          end_date_formated: delivery.end_date
            ? format(parseISO(delivery?.end_date), 'dd/MM/yyyy')
            : '- - / - - / - -',
        }));

        setDeliveries(data);
      }

      loadDeliveries();
    }, [auth?.id, typeDeliveries]),
  );

  return (
    <Container>
      <Profile>
        <ActionContainer>
          {profile?.avatar ? (
            <Avatar
              source={{
                uri: profile?.avatar?.url,
              }}
            />
          ) : (
            <>{profile?.name && <NamePhoto name={profile?.name} />}</>
          )}
        </ActionContainer>

        <TitleContainer>
          <Welcome>Bem vindo de volta</Welcome>
          <Name>{profile?.name}</Name>
        </TitleContainer>

        <ActionContainer>
          <Icon
            onPress={handleLogout}
            name="exit-to-app"
            color={colors.danger}
            size={25}
          />
        </ActionContainer>
      </Profile>

      <Menu>
        <MenuTitle>Entregas</MenuTitle>
        <Options>
          <Option
            style={{
              marginRight: 15,
            }}
            onPress={handlePending}
            selected={typeDeliveries === 'Pendentes'}>
            Pendente
          </Option>
          <Option
            selected={typeDeliveries === 'Entregues'}
            onPress={handleDelivered}>
            Entregue
          </Option>
        </Options>
      </Menu>

      <List
        data={deliveries}
        keyExtractor={item => String(item?.id)}
        renderItem={({ item }) => <Delivery data={item} />}
      />
    </Container>
  );
}
