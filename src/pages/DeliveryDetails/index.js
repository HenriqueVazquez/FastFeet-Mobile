/* eslint-disable react/jsx-no-bind */
import React from 'react';

import { Alert, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { useRoute } from '@react-navigation/native';

import PropTypes from 'prop-types';

import api from '~/services/api';
import colors from '~/styles/colors';

import {
  Container,
  Background,
  Content,
  Card,
  TitleContainer,
  Title,
  Label,
  Value,
  Status,
  Menu,
  Option,
  OptionTitle,
} from './styles';

export default function DeliveryDetails({ navigation }) {
  const auth = useSelector(state => state.auth);

  const route = useRoute();
  const { delivery } = route.params;

  async function handleDeliveryWithdraw() {
    async function deliveryWithdraw() {
      try {
        const response = await api.put(
          `/deliveryman/${auth.id}/delivery/${delivery.id}`,
          {
            start_date: new Date(),
          },
        );

        const deliverymessage = response.data[0];

        Alert.alert(deliverymessage.Info);

        navigation.navigate('Entrega');
      } catch (error) {
        const errorMessage = error?.response?.data;

        Alert.alert(errorMessage.Erro);
      }
    }

    Alert.alert(
      'Confirmação de retirada',
      'Confirma que deseja realizar a retirada desta encomenda?',
      [
        {
          text: 'Cancelar',
          style: 'destructive',
        },
        {
          text: 'Confirmar',
          onPress: deliveryWithdraw,
        },
      ],

      {
        cancelable: false,
      },
    );
  }
  console.tron.log(delivery);
  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Background />
      <Content>
        <Card>
          <TitleContainer>
            <Icon name="local-shipping" color={colors.primary} size={20} />
            <Title>Informações da entrega</Title>
          </TitleContainer>
          <Label>DESTINATÁRIO</Label>
          <Value>{delivery.recipient.name}</Value>
          <Label>ENDEREÇO DA ENTREGA</Label>
          <Value>
            {delivery.recipient.street}, {delivery.recipient.number},{' '}
            {delivery.recipient.city} - {delivery.recipient.state},{' '}
            {delivery.recipient.zip_code}
          </Value>
          <Label>PRODUTO</Label>
          <Value>{delivery.product}</Value>
        </Card>

        <Card>
          <TitleContainer>
            <Icon name="event" color={colors.primary} size={20} />
            <Title>Situação da entrega</Title>
          </TitleContainer>
          <Label>STATUS</Label>
          <Status>{delivery.status}</Status>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Label>DATA DE RETIRADA</Label>
              <Value>{delivery.start_date_formated}</Value>
            </View>
            <View>
              <Label>DATA DE ENTREGA</Label>
              <Value>{delivery.end_date_formated}</Value>
            </View>
          </View>
        </Card>

        <Menu>
          <Option
            onPress={() => navigation.navigate('CreateProblem', { delivery })}>
            <Icon name="highlight-off" color={colors.danger} size={30} />
            <OptionTitle>Informar{`\n`}Problema</OptionTitle>
          </Option>

          <Option
            onPress={() =>
              navigation.navigate('Problems', {
                delivery_id: delivery.id,
              })
            }>
            <Icon name="info-outline" color="#E7BA40" size={30} />
            <OptionTitle>Visualizar{`\n`}Problemas</OptionTitle>
          </Option>
          {delivery.status === 'Postado' ? (
            <Option onPress={handleDeliveryWithdraw}>
              <Icon name="local-shipping" color={colors.primary} size={30} />
              <OptionTitle>Realizar{`\n`}Retirada</OptionTitle>
            </Option>
          ) : (
            <Option
              onPress={() =>
                navigation.navigate('ConfirmPhoto', {
                  delivery_id: delivery.id,
                })
              }>
              <Icon
                name="check-circle-outline"
                color={colors.primary}
                size={30}
              />
              <OptionTitle>Confirmar{`\n`}Entrega</OptionTitle>
            </Option>
          )}
        </Menu>
      </Content>
    </Container>
  );
}

DeliveryDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
