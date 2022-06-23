import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.gray,
})`
  font-family: 'Roboto-Regular';

  border: 1px solid ${colors.lightGray};
  background: ${colors.light};
  border-radius: 4px;

  height: 45px;
  padding-left: 20px;
  padding-right: 20px;
`;
