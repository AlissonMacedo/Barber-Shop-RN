import React, { Component } from 'react';
import { TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//import api from '~/services/api';
import ImageBarberHeader from '~/assets/imagebarber.jpeg';
import logo from '~/assets/barbershop-watermark.png';
import imagemFundo from '~/assets/imageBarberShopTest.jpg';

import HeaderSearch from '~/components/HeaderSearch';

import {
  Container,
  HeaderPesquisa,
  FormInput,
  ProvidersList,
  Provider,
  Description,
  Avatar,
  Title,
  DescriptionTextArrow,
  DescriptionText,
  TextDescription,
} from './styles';

class Products extends Component {
  state = {
    providers: [
      {
        name: 'Thiago Brutal',
        avatar:
          'https://s.lyoness.tv/websitesharedfiles/dealer/logo/pt/14305022_logo_20192613334620.png',
        product:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Gm2Jw0g8Z1h_W5seQor4uUk-3MV-TRsvc5gC_a83ExxVpeUxdg&s',
      },
      {
        name: 'The Cut',
        avatar:
          'https://s3-media3.fl.yelpcdn.com/bphoto/hCGc_L1CS_GVkNtPZmNijg/o.jpg',
        product:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzaJXdgwEnowKlD9ukBqhrdXTqkc-dWxKEdD_e0faXmY1JkQ3&s',
      },
      {
        name: 'Barber Shop',
        avatar:
          'https://img.elo7.com.br/product/main/27CB3CE/adesivo-the-barber-shop-asb33-salao.jpg',
        product:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCLv1sP7idjrpVzNjydLvBKwSp3YXWdXtRND7rNvHW6Cw1TKaEw&s',
      },
      {
        name: 'Barbearia do Tony',
        avatar:
          'http://principalessencias.com.br/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/t/r/transferir.png.jpg',
        product:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfOl5mSU2no2tU_fUd2TXqsVZdF_aTjaVebnNYwD-Giq5Gfx3nmg&s',
      },
      {
        name: 'BaberShop Dicaprio',
        avatar:
          'https://st3.depositphotos.com/7473544/18422/v/1600/depositphotos_184225628-stock-illustration-barber-shop-vintage-label-badge.jpg',
        product:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwm3N0f9HEYxi31zXSMg-ts9N2L_krwXtA9IJWKfEM1JMcp2Oh&s',
      },
    ],
  };

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={imagemFundo}
          style={{ height: '100%' }}
          resizeMode="cover"
          blurRadius={9}>
          <Container>
            <HeaderPesquisa>
              <FormInput
                icon="search"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Procurar.."
                /*   value={name}
            onChangeText={setName} */
              />
            </HeaderPesquisa>

            <ProvidersList
              data={this.state.providers}
              keyExtractor={provider => String(provider.name)}
              renderItem={({ item: provider }) => (
                <Provider
                  onPress={() =>
                    this.props.navigation.navigate('OverViewBarber')
                  }>
                  <Avatar
                    source={{
                      uri: provider.product
                        ? provider.product
                        : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                    }}
                  />
                  <Description>
                    <Title>{provider.name}</Title>

                    <DescriptionTextArrow>
                      <DescriptionText>
                        <TextDescription>
                          Horário: 09 às 21 horas
                        </TextDescription>
                      </DescriptionText>
                      <Icon
                        name="chevron-right"
                        size={30}
                        color="#333"
                        style={{ marginTop: 15 }}
                      />
                    </DescriptionTextArrow>
                  </Description>
                </Provider>
              )}
            />
          </Container>
        </ImageBackground>
      </>
    );
  }
}

Products.navigationOptions = ({ navigation }) => ({
  title: 'Produtos',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home');
      }}>
      <Icon name="chevron-left" size={40} color="#fff" />
    </TouchableOpacity>
  ),
});

export default Products;
