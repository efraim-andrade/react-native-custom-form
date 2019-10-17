import styled from 'styled-components/native';
import {Animated} from 'react-native';

import InputComponents from '../Input';
import ButtonComponents from '../Button';

const colors = {
  secondary: '#7A1347',
};

export const Container = styled(Animated.View)``;

export const Input = styled(InputComponents)`
  margin-top: 47px;
`;

export const PasswordReset = styled.TouchableOpacity.attrs({
  activeOpacity: 0.95,
})`
  margin-top: 16px;
`;

export const Text = styled.Text`
  color: #333;
  opacity: 0.5;
  font-size: 15px;
`;

export const Button = styled(ButtonComponents)`
  width: 100%;
  height: 42px;

  background-color: ${colors.secondary};
`;
