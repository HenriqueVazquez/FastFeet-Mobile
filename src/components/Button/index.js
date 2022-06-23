/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import colors from '~/styles/colors';

import PropTypes from 'prop-types';

import { Container, TextButton } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.light} />
        ) : (
          <TextButton>{children}</TextButton>
        )}
      </Container>
    </GestureHandlerRootView>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
