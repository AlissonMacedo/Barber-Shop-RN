import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
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
  DetailsBarber,
  TextIcon,
  TexDetailsBaber,
  ContainerCardBarber,
  FooterBarber,
} from './styles';

export default function OverViewBarber({ navigation }) {
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
          <GaleryPhotos
            ImagemUri={ImageBarberHeader}
            texto={'Hunder Cut'}
            tempo={'35 min'}
            preco={'R$45,00'}
          />
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
