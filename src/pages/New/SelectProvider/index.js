import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

class SelectProvider extends Component {
  state = {
    providers: [
      {
        name: 'Profissional Alisson',
      },
      { name: 'Profissional Renan' },
      { name: 'Profissional Macedo' },
      { name: 'Profissional Carlos' },
      { name: 'Profissional Vina' },
      { name: 'Profissional Lara' },
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
              onPress={() => this.props.navigation.navigate('SelectHairStyle')}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar
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

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione um Profissional',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectBarber');
      }}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});

export default SelectProvider;
