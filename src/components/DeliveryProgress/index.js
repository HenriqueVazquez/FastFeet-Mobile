import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';

import {
  Container,
  Point,
  Line,
  ProgressContainer,
  Descriptions,
  Description,
} from './styles';

export default function DeliveryProgress({ status }) {
  return (
    <Container>
      <ProgressContainer>
        <Point
          marked={
            status === 'Postado' ||
            status === 'Retirado' ||
            status === 'Entregue'
          }
        />
        <Line />
        <Point marked={status === 'Entregue' || status === 'Retirado'} />
        <Line />
        <Point marked={status === 'Entregue'} />
      </ProgressContainer>
      <Descriptions>
        <View>
          <Description>Aguardando</Description>
          <Description>Retirada</Description>
        </View>
        <Description
          style={{
            marginRight: 8,
          }}>
          Retirada
        </Description>
        <Description>Entregue</Description>
      </Descriptions>
    </Container>
  );
}

DeliveryProgress.propTypes = {
  status: PropTypes.string.isRequired,
};
