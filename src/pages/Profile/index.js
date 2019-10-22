import React, { useRef, useState, useEffect } from 'react';
import { ImageBackground } from 'react-native';
//import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

//import Background from '~/components/Background';
//import { signOut } from '~/store/modules/auth/actions';
//import { updateProfileRequest } from '~/store/modules/user/actions';

import Header from '~/components/Header';
import imagemFundo from '~/assets/imageBarberShopTest.jpg';

import {
  Container,
  TextTitulo,
  Separator,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile({ navigation }) {
  // const dispatch = useDispatch();
  //const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // const [name, setName] = useState(profile.name);
  // const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, []);

  function handleSubmit() {
    /* dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }),
    );*/
  }

  function handleLogout() {
    // dispatch(signOut());
  }

  return (
    <ImageBackground
      source={imagemFundo}
      style={{ height: '100%' }}
      resizeMode="cover"
      blurRadius={9}>
      <Container>
        <Form>
          <TextTitulo>Dados da sua conta</TextTitulo>

          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            /*   value={name}
            onChangeText={setName} */
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPassword.current.focus()}
            /*  value={email}
            onChangeText={setEmail} */
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua nova senha"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
          <LogoutButton onPress={() => navigation.navigate('SignIn')}>
            Sair do BarberShop
          </LogoutButton>
        </Form>
      </Container>
    </ImageBackground>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
