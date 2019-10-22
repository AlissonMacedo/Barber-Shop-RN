import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import GaleryPhotos from '~/components/GaleryPhotos';
import BannerHeaderHome from '~/assets/bannerHomeHeader.jpg';
import BannerGrandeHome from '~/assets/bannergrandeHome.png';
import BannerMediumHome from '~/assets/bannerMediumHome.png';

import Header from '~/components/Header';
import {
  Container,
  Form,
  Input,
  HeaderHome,
  DetalheHeader1,
  DetalheHeader,
  SubmitButton,
  BannerHome,
  ViewDeskt,
  TextDestak,
  CardList,
  AvatarMini,
  AvatarMedium,
  Avatar,
  BannerGrande,
} from './styles';

import ImageTeste from '~/assets/avatarBarber.jpg';
import imagemFundo from '~/assets/imageBarberShopTest.jpg';
class Home extends Component {
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
    const selecionados = this.state.providers.slice(0, 4);

    console.log(selecionados);

    return (
      <>
        <Container>
          <StatusBar backgroundColor="#333" barStyle="dark-content" />

          <HeaderHome>
            <DetalheHeader1>
              <Form>
                <Input
                  autoCorrect={true}
                  placeholder="Procurar..."
                  value={''}
                  onChangeText={text => this.setState({ newTasks: text })}
                  returnKeyType="send"
                  onSubmitEditing={this.handleAddTask}
                  maxLength={25}
                />
                <SubmitButton onPress={() => this.handleAddTask()}>
                  <Icon name="message" size={40} color="#fff" />
                </SubmitButton>
              </Form>
            </DetalheHeader1>
            <ScrollView>
              <DetalheHeader />
              <BannerHome source={BannerHeaderHome} resizeMode="cover" />

              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ flexGrow: 1 }}>
                {selecionados.map(provider => (
                  <AvatarMini
                    key={provider}
                    source={{
                      uri: provider.avatar
                        ? provider.avatar
                        : `https://api.adorable.io/avatar/50/${
                            provider.name
                          }.png`,
                    }}
                    resizeMode="cover"
                  />
                ))}
                {selecionados.map(provider => (
                  <AvatarMini
                    key={provider}
                    source={{
                      uri: provider.avatar
                        ? provider.avatar
                        : `https://api.adorable.io/avatar/50/${
                            provider.name
                          }.png`,
                    }}
                    resizeMode="stretch"
                  />
                ))}
              </ScrollView>

              <ViewDeskt>
                <TextDestak>Parceiros</TextDestak>

                <CardList
                  data={selecionados}
                  keyExtractor={item => item.name}
                  renderItem={({ item: provider }) => (
                    <Avatar
                      source={{
                        uri: provider.avatar
                          ? provider.avatar
                          : `https://api.adorable.io/avatar/50/${
                              provider.name
                            }.png`,
                      }}
                      resizeMode="cover"
                    />
                  )}
                />
              </ViewDeskt>

              <TextDestak>Promoção</TextDestak>
              <ScrollView
                style={{ paddingLeft: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <AvatarMedium source={BannerMediumHome} />
                <AvatarMedium source={ImageTeste} />
                <AvatarMedium source={ImageTeste} />
                <AvatarMedium source={ImageTeste} />
              </ScrollView>

              <BannerGrande source={BannerGrandeHome} resizeMode="stretch" />
            </ScrollView>
          </HeaderHome>
        </Container>
      </>
    );
  }
}

Home.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
  ),
};

export default Home;
