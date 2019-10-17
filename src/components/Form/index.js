import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Alert, Animated} from 'react-native';

import {Container, Input, Button, PasswordReset, Text} from './styles';

const INITIAL_BUTTON_POSITION = 400;

export default function Form({inputs, type, schema, buttonText}) {
  const refs = inputs.map(() => useRef(null));

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonMarginTop] = useState(
    new Animated.Value(INITIAL_BUTTON_POSITION),
  );

  function useOpacityAnimation() {
    const INITIAL_OPACITY = 0;

    const [opacityValue] = useState(new Animated.Value(INITIAL_OPACITY));

    return opacityValue;
  }

  const opacityValues = inputs.map(() => useOpacityAnimation());

  useEffect(() => {
    const DELAY = 150;

    Animated.stagger(
      DELAY,
      opacityValues.map(value =>
        Animated.timing(value, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ),
      Animated.timing(buttonMarginTop, {
        toValue: 82,
        duration: 600,
        useNativeDriver: true,
      }).start(),
    ).start();
  }, [buttonMarginTop, opacityValues]);

  async function handleSubmit() {
    setIsLoading(true);

    try {
      let formData = {};

      inputs.forEach(input => {
        formData = {...formData, [input.type]: input.value};
      });

      await schema.validate(formData, {
        abortEarly: false,
        stripUnknown: true,
      });

      Alert.alert('success!');

      setErrors([]);
    } catch (error) {
      Alert.alert('error!');
      setErrors(error.inner);
    } finally {
      setIsLoading(false);
    }
  }

  function handleError(field) {
    const fieldError = errors.filter(error => error.path === field);

    return fieldError[0];
  }

  function isLastInput(index) {
    return inputs.length === index + 1;
  }

  function handleNextInput(index) {
    if (isLastInput(index)) {
      return handleSubmit();
    }

    return refs[index + 1].current.focus();
  }

  return (
    <Container>
      {inputs.map((input, index) => (
        <Input
          {...input}
          ref={refs[index]}
          key={`input-${input.type}`}
          style={{opacity: opacityValues[index]}}
          onSubmitEditing={() => handleNextInput(index)}
          error={handleError(input.type) && handleError(input.type).message}
        />
      ))}

      {type === 'signin' && (
        <PasswordReset onPress={() => {}}>
          <Text>Recuperar senha</Text>
        </PasswordReset>
      )}

      <Animated.View style={{transform: [{translateY: buttonMarginTop}]}}>
        <Button
          text={buttonText}
          isLoading={isLoading}
          onPress={handleSubmit}
        />
      </Animated.View>
    </Container>
  );
}

Form.defaultProps = {
  schema: {},
};

Form.propTypes = {
  schema: PropTypes.shape(),
  type: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
