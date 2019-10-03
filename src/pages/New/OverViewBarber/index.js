import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ImageBarberHeader from '~/assets/imagebarber.jpeg';
import AvatarBarberLogo from '~/assets/avatarBarber.png';
import IconWifiLogo from '~/assets/iconWifi.png';

import SelectBarber from '~/pages/NewAccount/SignUpBarber';

import {
  Container,
  ImageBarber,
  HeaderBarber,
  TextHeaderBarber,
  AvatarBarber,
  ProvidersList,
  HeaderService,
  ContainerIcon,
  IconWifi,
  DetailsBarber,
  TextIcon,
  TexDetailsBaber,
  FooterBarber,
} from './styles';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function OverViewBarber() {
  return (
    <Container>
      <ImageBarber source={ImageBarberHeader} />
      <HeaderBarber>
        <TextHeaderBarber>Nome da Barbearia</TextHeaderBarber>
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
        <DetailsBarber>
          <TexDetailsBaber>
            Esta barbearia é muito legal, aqui tem os melhores cortes...
          </TexDetailsBaber>
          <ScrollView horizontal={true} style={{ flex: 1, margin: 20 }}>
            <Text>Teste</Text>
          </ScrollView>
        </DetailsBarber>
      </ProvidersList>
      <FooterBarber>
        <TouchableOpacity>
          <Icon name="fullscreen" size={40} color="#000" />
        </TouchableOpacity>

        <Icon name="apps" size={40} color="#000" />
        <Icon name="adb" size={40} color="#000" />
        <Icon name="cake" size={40} color="#000" />
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
