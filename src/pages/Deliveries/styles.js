import styled from 'styled-components/native';

import Text from '~/components/Text';
import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.light};
`;

export const Profile = styled.View`
  margin-top: 20.5px;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ActionContainer = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const TitleContainer = styled.View`
  flex: 3;
`;

export const Welcome = styled(Text)`
  font-size: 16px;
  color: ${colors.stainlessGray};
  margin: 12px 0 0 12px;
`;

export const Name = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.darkGray};

  margin: 0 0 0 12px;
`;

export const Menu = styled.View`
  margin-top: 22.5px;
  padding: 0 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const MenuTitle = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.darkGray};
`;

export const Options = styled.View`
  flex-direction: row;
`;

export const Option = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.selected ? colors.primary : colors.gray)};
  text-decoration: ${props => (props.selected ? 'underline' : 'none')};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 20,
  },
})``;
