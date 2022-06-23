/* eslint-disable react/jsx-no-bind */
import React, { useRef, useEffect } from 'react';
import { Image, StatusBar, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import logo from '~/assets/logo.png';
import { signInRequest } from '~/store/modules/auth/authState';
import colors from '~/styles/colors';

import { Container, Form, Input, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const formRef = useRef(null);
  const error = useSelector(state => state.auth.erroLogin?.Erro);

  const [erroId, setErroId] = React.useState('');

  useEffect(() => {
    setErroId(error);
  }, [error]);

  useFocusEffect(
    React.useCallback(() => {
      setErroId('');
    }, []),
  );

  function handleSubmit({ id }, { reset }) {
    dispatch(signInRequest({ id }));
    Keyboard.dismiss();

    reset();
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} />
      <Image source={logo} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="id"
          placeholder="Informe seu ID de cadastro"
          autoCorrect={false}
          returnKeyType="send"
          autoCapitalize="none"
          keyboardType="number-pad"
          error={erroId}
          onChangeText={() => setErroId('')}
          dimissKeyboard={false}
          onSubmitEditing={() => formRef.current.submitForm()}
        />

        <SubmitButton
          loading={loading}
          onPress={() => formRef.current.submitForm()}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
