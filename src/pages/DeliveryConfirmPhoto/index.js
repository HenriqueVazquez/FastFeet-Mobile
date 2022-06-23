/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import { Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { useRoute } from '@react-navigation/native';

import api from '~/services/api';

import {
  Container,
  Background,
  Content,
  CameraWrapper,
  Camera,
  Button,
  TakePictureButton,
} from './styles';

export default function DeliveryConfirmPhoto({ navigation }) {
  const auth = useSelector(state => state.auth);

  const route = useRoute();

  const cameraRef = useRef(null);
  const [pictureUri, setPictureUri] = useState('');

  async function handleSubmit() {
    const dataFile = new FormData();
    dataFile.append('file', {
      name: 'assignature.jpg',
      type: 'image/jpeg',
      uri: pictureUri,
    });

    const pictureResponse = await api.post('files', dataFile, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: () => dataFile,
    });
    const doneDelivery = await api.put(
      `/deliveryman/${auth.id}/delivery/${route.params.delivery_id}/done`,
      {
        signature_id: pictureResponse.data.id,
      },
    );

    const doneDeliverymessage = doneDelivery.data[0];
    Alert.alert(doneDeliverymessage.Info);
    navigation.navigate('Entrega');
  }

  async function handletakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPictureUri(data.uri);
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        {pictureUri ? (
          <CameraWrapper>
            <Image source={{ uri: pictureUri }} style={{ height: '100%' }} />
          </CameraWrapper>
        ) : (
          <CameraWrapper>
            <Camera ref={cameraRef} type="back" captureAudio={false} />
            <TakePictureButton onPress={handletakePicture}>
              <Icon name="photo-camera" color="#fff" size={30} />
            </TakePictureButton>
          </CameraWrapper>
        )}
        <Button onPress={handleSubmit} loading={false}>
          Enviar
        </Button>
      </Content>
    </Container>
  );
}

DeliveryConfirmPhoto.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
