import React from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background, Container, Texto, ImgAccount, Button } from './styles';
import Imagem01 from '~/assets/icone-tesouraepente-barber.jpg';
import Imagem02 from '~/assets/icone-cadeira-barber.jpg';
import SelectAccount02 from '~/assets/selectAccount02.png';
import logo from '~/assets/barbershop-watermark.png';

export default function SelectAccountType({ navigation }) {
  return (
    <>
      <Background>
        <ImageBackground
          source={logo}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain">
          <Container>
            <Button onPress={() => navigation.navigate('SignUpBarber')}>
              <ImgAccount source={Imagem01} />
              <Texto>Profissional</Texto>
            </Button>
            <Button onPress={() => navigation.navigate('SignUpClient')}>
              <ImgAccount source={Imagem02} />
              <Texto>Cliente</Texto>
            </Button>
          </Container>
        </ImageBackground>
      </Background>
    </>
  );
}

SelectAccountType.navigationOptions = ({ navigation }) => ({
  title: 'Crie sua conta como',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Sign');
      }}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
