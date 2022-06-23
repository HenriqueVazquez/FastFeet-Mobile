import styled from 'styled-components/native';

import Text from '~/components/Text';
import colors from '~/styles/colors';

export const Container = styled.View`
  background: ${colors.light};
  flex: 1;
`;

export const Background = styled.View`
  background: ${colors.primary};
  height: 155px;
`;

export const Content = styled.View`
  margin-top: -80px;
`;

export const Card = styled.View`
  background: ${colors.light};
  margin: 0 20px;
  margin-bottom: 10px;
  padding: 10px 30px 0 15px;

  border-radius: 4px;
  border: 1px solid ${colors.lightGray};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const Title = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
  margin-left: 4px;
`;

export const Label = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.gray};
  margin-bottom: 5px;
`;

export const Value = styled(Text)`
  font-size: 14px;
  color: ${colors.stainlessGray};
  margin-bottom: 15px;
`;

export const Status = styled(Value)`
  text-transform: capitalize;
`;

export const Menu = styled.View`
  margin: 0 20px;
  background: ${colors.almostWhite};
  border-radius: 4px;
  border: 1px solid ${colors.lightGray};

  height: 100px;

  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  border: 1px solid ${colors.lightGray};

  flex: 1;
`;

export const OptionTitle = styled(Text)`
  font-size: 12px;
  color: ${colors.gray};

  margin-top: 5px;
  text-align: center;
`;
