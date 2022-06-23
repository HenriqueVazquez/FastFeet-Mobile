import { takeEvery, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { parseISO, format } from 'date-fns';

import api from '~/services/api';

import { signInSuccess, signInFailure } from './authState';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliveryman/${id}`);

    yield put(
      signInSuccess({
        id,
        name: response.data.name,
        email: response.data.email,
        created_at: format(parseISO(response.data.created_at), 'dd/MM/yyyy'),
        avatar: response.data.avatar,
      }),
    );
  } catch (err) {
    const erroLogin = err.response.data ? err.response.data : '';
    Alert.alert('Falha na autenticação', 'verifique seus dados!');
    yield put(signInFailure({ erroLogin }));
  }
}

export default all([takeEvery('auth/signInRequest', signIn)]);
