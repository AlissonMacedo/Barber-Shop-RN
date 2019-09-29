import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default function SignUpClient({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
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
            width: 160,
            height: 200,
            resizeMode: 'stretch',
            marginBottom: 10,
          }}
        />
        <Form>
          <FormInput
            icon="person-outline"
            iconColor="rgba(255, 255, 255, 0.8)"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            iconColor="rgba(255, 255, 255, 0.8)"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            iconColor="rgba(255, 255, 255, 0.8)"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar conta
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </>
  );
}

SignUpClient.navigationOptions = ({ navigation }) => ({
  title: 'Selecione Tipo de Conta',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Sign');
      }}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
