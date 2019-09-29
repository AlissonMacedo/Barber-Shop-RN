import React, { useRef, useState } from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image, Text } from 'react-native';
import logo from '~/assets/barbershop-watermark.png';

import {
  Background,
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  loading,
  TextoTitulo,
  ContainerTitulo,
  Div,
} from './styles';

export default function SignUpBarber({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = null;

  function handleSubmit() {}

  return (
    <>
      <Background>
        <ImageBackground
          source={logo}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain">
          <Container>
            <Form>
              <ContainerTitulo>
                <TextoTitulo>Forneça dados da sua empresa</TextoTitulo>
              </ContainerTitulo>
              <FormInput
                icon="person-outline"
                iconColor="rgba(255, 255, 255, 0.8)"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Nome comercial do Salão"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current.focus()}
                value={name}
                onChangeText={setName}
              />

              <FormInput
                icon="person-outline"
                iconColor="rgba(255, 255, 255, 0.8)"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Nome fantasia do Salão"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current.focus()}
                value={name}
                onChangeText={setName}
              />

              <FormInput
                icon="person-outline"
                iconColor="rgba(255, 255, 255, 0.8)"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Endereço completo"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current.focus()}
                value={name}
                onChangeText={setName}
              />

              <Div />

              <ContainerTitulo>
                <TextoTitulo>Forneça seus dados pessoais</TextoTitulo>
              </ContainerTitulo>

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
          </Container>
        </ImageBackground>
      </Background>
    </>
  );
}

SignUpBarber.navigationOptions = ({ navigation }) => ({
  title: 'Profissional Barber',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectAccountType');
      }}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
