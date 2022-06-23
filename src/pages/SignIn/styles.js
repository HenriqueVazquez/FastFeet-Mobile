import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Button from '~/components/Button';
import { Input as UnInput } from '~/components/Form';
import colors from '~/styles/colors';

import { Form as FormContainer } from '@unform/mobile';

export const Container = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 0 25px;
`;

export const Form = styled(FormContainer)`
  width: 100%;
`;

export const Input = styled(UnInput)`
  margin-top: 37.5px;
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  background: ${colors.success};
  width: 100%;
  margin-top: 15.5px;
`;

export const Error = styled.Text`
  font-size: 13px;
  font-weight: bold;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.9);
  color: ${colors.alert};
  align-self: center;
  margin-top: 5px;
  margin-bottom: -7px;
`;

export const Touchable = styled(TouchableWithoutFeedback)`
  flex: 1;
  width: 100%;
`;
