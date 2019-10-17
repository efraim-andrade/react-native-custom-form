import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';

import {Container, Description} from './styles';

export default function Button({text, hasIcon, color, isLoading, ...rest}) {
  return (
    <Container {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Description color={color} hasIcon={hasIcon}>
          {text}
        </Description>
      )}
    </Container>
  );
}

Button.defaultProps = {
  color: '#E1E1E1',
  isLoading: false,
};

Button.propTypes = {
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
