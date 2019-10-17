import styled, {css} from 'styled-components/native';

const colors = {
  white: '#fff',
  greyest: '#e1e1e1',
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 160px;
  height: 40px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background: ${props => props.color || colors.greyest};
`;

export const Description = styled.Text`
  color: ${colors.white};
  font-size: 13px;
  font-weight: ${props => (props.hasIcon ? 'normal' : '700')};
  opacity: ${props => (props.color && 1) || 0.6};

  ${props =>
    props.hasIcon
      ? css`
          font-family: normal;
          font-size: 14;
        `
      : css`
          font-weight: 700;
        `};
`;
