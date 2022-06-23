/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  Container,
  Background,
  Content,
  TextAreaInput,
  SubmitButton,
} from './styles';

function CreateProblem({ navigation }) {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const route = useRoute();
  const { delivery } = route.params;
  console.tron.log(delivery);

  async function handleSubmit({ description }, { reset }) {
    setLoading(true);

    try {
      await api.post(`/delivery/${delivery.id}/problems`, { description });

      Alert.alert('Problema cadastrado com sucesso!');
      navigation.navigate('Detalhes', { delivery });
    } catch (error) {
      const errormessage = error.response.data;

      Alert.alert(errormessage.Erro);
    }

    setLoading(false);
    reset();
  }

  return (
    <Container>
      <Background />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <TextAreaInput
            name="description"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            multiline
            style={{
              textAlignVertical: 'top',
            }}
          />

          <SubmitButton
            loading={loading}
            onPress={() => formRef.current.submitForm()}>
            Enviar
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}

export default CreateProblem;

CreateProblem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
