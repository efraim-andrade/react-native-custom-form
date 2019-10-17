import styled from 'styled-components/native';
import posed from 'react-native-pose';
import {Animated} from 'react-native';
import IconLib from 'react-native-vector-icons/MaterialCommunityIcons';

const colors = {
  secondary: '#7A1347',
  greyest: '#E1E1E1',
  danger: '#F27878',
};

export const Container = styled(Animated.View).attrs(props => ({
  style: props.style,
}))`
  position: relative;
`;

export const AnimatedLabel = posed.Text({
  isNotFocused: {
    bottom: 7,
    fontSize: 16,
  },
  isFocused: {
    bottom: 34,
    fontSize: 12,
  },
});

export const Label = styled(AnimatedLabel)`
  position: absolute;
  left: 1px;
  bottom: 8px;

  color: #333;
  opacity: 0.5;
`;

export const InputField = styled.TextInput.attrs({
  placeholderTextColor: colors.greyest,
})`
  padding: 7px 0;

  border-bottom-width: ${props => (props.isFocused ? 3 : 1)}px;
  border-bottom-color: ${props =>
    props.error
      ? colors.danger
      : props.isFocused
      ? colors.secondary
      : 'rgba(189, 189, 189, 1)'};

  color: #333;
  text-align: left;
  background: transparent;
`;

export const EyeIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
  hitSlop: {top: 20, right: 20, bottom: 20, left: 20},
})`
  position: absolute;
  right: 0;
  bottom: 4px;
`;

export const Icon = styled(IconLib).attrs(props => ({
  size: 24,
  color: colors.greyest,
  name: props.isHide ? 'eye-outline' : 'eye-off-outline',
}))``;

export const Error = styled.Text`
  position: absolute;
  right: 0;
  bottom: -20px;

  font-size: 13px;

  color: ${colors.danger};
`;
