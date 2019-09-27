import React from 'react';
import { Image } from 'react-native';
import logo from '~/assets/logo-barber.png';

import {
  Container,
  Form,
  FormInput,
  Submitbutton,
  GroupLinks,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
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
          />

          <FormInput
            icon="lock-outline"
            iconColor="#fff"
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <Submitbutton onPress={() => navigation.navigate('Dashboard')}>
            Login
          </Submitbutton>
        </Form>

        <GroupLinks>
          <SignLink>
            <SignLinkText onPress={() => navigation.navigate('Recovere')}>
              Esqueci minha senha
            </SignLinkText>
          </SignLink>
          <SignLink>
            <SignLinkText onPress={() => navigation.navigate('SignUp')}>
              Criar conta gratuita
            </SignLinkText>
          </SignLink>
        </GroupLinks>
      </Container>
    </>
  );
}
