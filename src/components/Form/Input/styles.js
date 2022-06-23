import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  background: ${colors.light};
  width: 100%;

  border-radius: 4px;
`;

export const TextI = styled.Text``;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.gray,
})`
  font-family: 'Roboto-Regular';
  height: 45px;
  margin-left: 20px;
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
