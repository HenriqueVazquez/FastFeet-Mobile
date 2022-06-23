import styled from 'styled-components/native';

import Text from '~/components/Text';
import colors from '~/styles/colors';

export const Container = styled.View`
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;
  padding-top: 15px;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
`;

export const Title = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
  margin-left: 10px;
`;

export const Details = styled.View`
  background: ${colors.almostWhite};

  padding: 20px;

  margin-top: 20px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Detail = styled.View`
  justify-content: flex-end;
`;

export const TitleDetail = styled(Text)`
  font-size: 10px;
  color: ${colors.gray};
`;

export const TextDetail = styled(Text)`
  font-size: 12px;
  color: ${colors.darkGray};
  font-weight: bold;
`;

export const TextLink = styled(TextDetail)`
  color: ${colors.primary};
`;
