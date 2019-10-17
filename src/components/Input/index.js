import React, {useState, forwardRef} from 'react';
import PropTypes from 'prop-types';

import {Container, InputField, Label, EyeIcon, Icon, Error} from './styles';

function LineInput(
  {style, withLabel, labelText, value, error, onBlur, ...rest},
  ref,
) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHide, setIsHide] = useState(rest.secureTextEntry);

  function handleBlur() {
    setIsFocused(false);

    if (value.length > 1 && onBlur) {
      onBlur();
    }
  }

  return (
    <Container style={style}>
      <Label pose={isFocused || value ? 'isFocused' : 'isNotFocused'}>
        {labelText}
      </Label>

      <InputField
        ref={ref}
        error={error}
        autoCapitalize="none"
        isFocused={isFocused}
        onBlur={() => handleBlur()}
        onFocus={() => setIsFocused(true)}
        {...rest}
        secureTextEntry={isHide}
      />

      {rest.secureTextEntry && (
        <EyeIcon onPress={() => setIsHide(!isHide)}>
          <Icon isHide={isHide} />
        </EyeIcon>
      )}

      {error && <Error>{error}</Error>}
    </Container>
  );
}

LineInput.defaultProps = {
  value: '',
  style: {},
  error: null,
  labelText: '',
  onBlur: () => {},
};

LineInput.propTypes = {
  error: PropTypes.bool,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  labelText: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.shape()),
};

export default forwardRef(LineInput);
