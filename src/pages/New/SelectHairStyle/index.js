import React, { Component } from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import imagemFundo from '~/assets/imageBarberShopTest2.jpg';

//import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

class SelectHairStyle extends Component {
  state = {
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
  };

  render() {
    console.log(this.state.providers);
    return (
      <ImageBackground
        source={imagemFundo}
        style={{ height: '100%' }}
        resizeMode="cover"
        blurRadius={9}>
        <Container>
          <ProvidersList
            data={this.state.providers}
            keyExtractor={provider => String(provider.name)}
            renderItem={({ item: provider }) => (
              <Provider
                onPress={() =>
                  this.props.navigation.navigate('SelectProvider')
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
                <Name>{provider.name}</Name>
              </Provider>
            )}
          />
        </Container>
      </ImageBackground>
    );
  }
}

SelectHairStyle.navigationOptions = ({ navigation }) => ({
  title: 'Selecione um serviço',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('OverViewBarber');
      }}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});

export default SelectHairStyle;
