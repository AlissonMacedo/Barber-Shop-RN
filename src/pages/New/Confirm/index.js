import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

class Confirm extends Component {
  state = {
    providers: [
      {
        name: 'Thiago Brutal',
        avatar:
          'https://s.lyoness.tv/websitesharedfiles/dealer/logo/pt/14305022_logo_20192613334620.png',
      },
      {
        name: 'The Cut',
        avatar:
          'https://s3-media3.fl.yelpcdn.com/bphoto/hCGc_L1CS_GVkNtPZmNijg/o.jpg',
      },
      {
        name: 'Barber Shop',
        avatar:
          'https://img.elo7.com.br/product/main/27CB3CE/adesivo-the-barber-shop-asb33-salao.jpg',
      },
      {
        name: 'Barbearia do Tony',
        avatar:
          'http://principalessencias.com.br/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/t/r/transferir.png.jpg',
      },
      {
        name: 'BaberShop Dicaprio',
        avatar:
          'https://st3.depositphotos.com/7473544/18422/v/1600/depositphotos_184225628-stock-illustration-barber-shop-vintage-label-badge.jpg',
      },
    ],

    cortes: [
      {
        name: 'CABELO BAGUNÇADO + BARBA APARADA',
        avatar:
          'https://www.elhombre.com.br/wp-content/uploads/2017/09/barba-cabelo-33-600x797.jpg',
      },
      {
        name: 'UNDERCUT AFRO + BARBA MÉDIA',
        avatar:
          'https://www.elhombre.com.br/wp-content/uploads/2017/09/baraba-cabelo-11-600x601.jpg',
      },
      {
        name: 'CABELO COMPRIDO + BARBA BAIXA',
        avatar:
          'https://www.elhombre.com.br/wp-content/uploads/2017/09/baraba-cabelo-1-600x639.jpeg',
      },
      {
        name: 'CREW CUT + BARBA BAIXA',
        avatar:
          'https://www.elhombre.com.br/wp-content/uploads/2017/09/03-barba-cabelo-1-600x604.jpg',
      },
      {
        name: 'COQUE SAMURAI + BARBA CHEIA',
        avatar:
          'https://www.elhombre.com.br/wp-content/uploads/2017/09/002-600x479.jpg',
      },
    ],
  };
  render() {
    const providers = this.state;
    return (
      <>
        <Container>
          <Avatar
            source={{
              uri: providers.avatar
                ? providers.avatar.url
                : `https://api.adorable.io/avatar/50/${providers.name}.png`,
            }}
          />
          <Name>{providers.name}</Name>

          <Time>19:10</Time>

          <SubmitButton
            onPress={() => this.props.navigation.navigate('Dashboard')}>
            Solicitar agendamento
          </SubmitButton>
        </Container>
      </>
    );
  }
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});

export default Confirm;
