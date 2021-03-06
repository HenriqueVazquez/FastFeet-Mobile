import styled from 'styled-components/native';

import Text from '~/components/Text';
import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  margin-top: 25px;
`;

export const ProgressContainer = styled.View`
  padding: 0 40px;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
`;

export const Point = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;

  background-color: ${props => (props.marked ? colors.primary : colors.light)};

  border: 1px solid ${colors.primary};
`;

export const Line = styled.View`
  height: 1px;
  flex: 1;
  background: ${colors.primary};
`;

export const Descriptions = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 0 22px;
  margin-top: 10px;
`;

export const Description = styled(Text)`
  font-size: 10px;
  color: ${colors.gray};

  text-align: center;
`;
