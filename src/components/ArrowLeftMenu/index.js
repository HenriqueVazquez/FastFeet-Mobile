import React from 'react';

import PropTypes from 'prop-types';

import colors from '~/styles/colors';

import {
  TouchableOpacity,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { ArrowContainer } from './styles';

export default function ArrowLeftMenu({ navigate }) {
  return (
    <ArrowContainer>
      <GestureHandlerRootView>
        <TouchableOpacity onPress={navigate}>
          <Icon name="arrow-back-ios" size={18} color={colors.light} />
        </TouchableOpacity>
      </GestureHandlerRootView>
    </ArrowContainer>
  );
}

ArrowLeftMenu.propTypes = {
  navigate: PropTypes.func.isRequired,
};
