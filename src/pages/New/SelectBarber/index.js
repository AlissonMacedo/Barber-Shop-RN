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

class SelectBarber extends Component {
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
                      uri: provider.avatar
                        ? provider.avatar
                        : `https://api.adorable.io/avatar/50/${
                            provider.name
                          }.png`,
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

SelectBarber.navigationOptions = ({ navigation }) => ({
  title: 'Barbers Próximos',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home');
      }}>
      <Icon name="chevron-left" size={40} color="#fff" />
    </TouchableOpacity>
  ),
});

export default SelectBarber;
