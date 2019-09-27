import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

class SelectBarber extends Component {
  state = {
    providers: [
      { name: 'Barbearia do Alisson' },
      { name: 'Barbearia do Renan' },
      { name: 'Barbearia do Macedo' },
      { name: 'Barbearia do Carlos' },
      { name: 'Barbearia do Vina' },
      { name: 'Barbearia do Lara' },
    ],
  };

  render() {
    console.log(this.state.providers);
    return (
      <Container>
        <ProvidersList
          data={this.state.providers}
          keyExtractor={provider => String(provider.name)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() => this.props.navigation.navigate('SelectProvider')}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    );
  }
}

SelectBarber.navigationOptions = ({ navigation }) => ({
  title: 'Selecione a Barbearia',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});

export default SelectBarber;
