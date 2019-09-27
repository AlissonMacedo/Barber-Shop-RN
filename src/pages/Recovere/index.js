import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import logo from '~/assets/logo-barber.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  loading,
} from './styles';

export default function Recovere({ navigation }) {
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = null;

  function handleSubmit() {}

  return (
    <>
      <Container>
        <Image
          source={logo}
          style={{
            width: 200,
            height: 250,
            resizeMode: 'stretch',
            marginBottom: 20,
          }}
        />
        <Form>
          <FormInput
            icon="mail-outline"
            iconColor="#fff"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <SubmitButton
            loading={loading}
            onPress={() => navigation.navigate('Dashboard')}>
            Nova Senha
          </SubmitButton>
        </Form>
        <SignLink>
          <SignLinkText onPress={() => navigation.navigate('SignIn')}>
            Voltar para Login
          </SignLinkText>
        </SignLink>
      </Container>
    </>
  );
}
