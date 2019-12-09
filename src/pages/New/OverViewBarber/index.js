import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ImageBarberHeader from '~/assets/imagebarber.jpeg';
import AvatarBarberLogo from '~/assets/avatarBarber.png';
import IconWifiLogo from '~/assets/iconWifi.png';

import GaleryPhotos from '~/components/GaleryPhotos';

import {
  Container,
  ImageBarber,
  HeaderBarber,
  TextHeaderBarber,
  AvatarBarber,
  ProvidersList,
  HeaderService,
  IconWifi,
  TexDetailsBaber,
  FooterBarber,
} from './styles';

export default function OverViewBarber({ navigation }) {
  const [state, setState] = useState({
    providers: [
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
  });

  return (
    <Container>
      <ImageBarber source={ImageBarberHeader} />
      <HeaderBarber>
        <TextHeaderBarber>BarberShop Tony</TextHeaderBarber>
        <AvatarBarber source={AvatarBarberLogo} />
      </HeaderBarber>
      <ProvidersList>
        <HeaderService>
          <IconWifi source={IconWifiLogo} />
          <IconWifi source={IconWifiLogo} />
          <IconWifi source={IconWifiLogo} />
          <IconWifi source={IconWifiLogo} />
          <IconWifi source={IconWifiLogo} />
        </HeaderService>
        <TexDetailsBaber>
          Esta barbearia é muito legal, aqui tem os melhores cortes...
        </TexDetailsBaber>
        <Text style={{ color: '#fff', marginLeft: 5, marginBottom: 10 }}>
          {' '}
          Nossos Cortes...
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ flex: 1, marginTop: 0 }}>
          {state.providers.map(hair => (
            <GaleryPhotos
              ImagemUri={{ uri: hair.avatar }}
              texto={hair.name}
              tempo={'35 min'}
              preco={'R$45,00'}
            />
          ))}
          <GaleryPhotos ImagemUri={ImageBarberHeader} texto={'teste'} />
          <GaleryPhotos ImagemUri={ImageBarberHeader} texto={'teste'} />
          <GaleryPhotos ImagemUri={ImageBarberHeader} texto={'teste'} />
        </ScrollView>
      </ProvidersList>
      <FooterBarber>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SelectHairStyle');
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}>
            <Icon name="schedule" size={30} color="#000" />
            <Text>Agendar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}>
            <Icon name="fullscreen" size={30} color="#000" />
            <Text>Cortes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}>
            <Icon name="fullscreen" size={30} color="#000" />
            <Text>Chat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Local')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}>
            <Icon name="fullscreen" size={30} color="#000" />
            <Text>Local</Text>
          </View>
        </TouchableOpacity>
      </FooterBarber>
    </Container>
  );
}

OverViewBarber.navigationOptions = ({ navigation }) => ({
  title: '',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectBarber');
      }}>
      <Icon name="chevron-left" size={40} color="#FFF" />
    </TouchableOpacity>
  ),
});
