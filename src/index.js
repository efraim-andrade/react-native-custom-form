import React from 'react';
import * as Yup from 'yup';
import styled from 'styled-components/native';
import {Platform} from 'react-native';

import Form from './components/Form';
import InputFactory from './functions/InputFactory';

const inputs = [
  {
    labelText: 'Email',
    type: 'email',
    keyboardType: 'email-address',
    autoCompleteType: 'email',
    autoCorrect: true,
    returnKeyType: 'next',
  },
  {
    labelText: 'Senha',
    type: 'password',
    secureTextEntry: true,
    returnKeyType: 'send',
  },
];

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido!')
    .required('Insira um Email!'),
  password: Yup.string().required('Insira uma senha!'),
});

export default function App() {
  return (
    <Container>
      <Form
        type="signin"
        schema={schema}
        buttonText="ENTRAR"
        inputs={InputFactory(inputs)}
      />
    </Container>
  );
}

const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
  enabled: Platform.OS === 'ios',
})`
  flex: 1;
  justify-content: center;

  padding: 0 20px;
`;
