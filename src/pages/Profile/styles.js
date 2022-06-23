import styled from 'styled-components/native';

import AvatarComponent from '~/components/Avatar';
import Button from '~/components/Button';
import NamePhotoComponent from '~/components/NamePhoto';
import Text from '~/components/Text';
import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.light};
  height: 100%;
`;

export const ContentContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,

  justifyContent: 'center',
  contentContainer: {
    marginTop: 80,
  },
})`
  flex: 1;

  height: 500px;
`;

export const Content = styled.SafeAreaView`
  align-items: center;

  padding: 0 36px;
`;

export const Avatar = styled(AvatarComponent)`
  height: 137px;
  width: 137px;
  border-radius: 68.5px;
`;

export const NamePhoto = styled(NamePhotoComponent)`
  height: 137px;
  width: 137px;
  border-radius: 68.5px;
`;

export const Details = styled.View`
  width: 100%;

  padding-top: 30px;
`;

export const Label = styled(Text)`
  font-size: 12px;
  color: ${colors.stainlessGray};
`;

export const Information = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.darkGray};
  margin-bottom: 15px;
`;

export const LogoutButton = styled(Button)`
  background: ${colors.danger};
  height: 40px;
  margin-top: 15px;
  width: 320px;
`;
