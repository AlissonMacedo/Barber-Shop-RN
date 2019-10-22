import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {
  Container,
  ProvidersList,
  Provider,
  Avatar,
  DivDadosProvider,
  DivDetalhesProvider,
  DivDetalhes1Provider,
  Name,
  Description,
} from './styles';

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
              onPress={() => this.props.navigation.navigate('SelectDateTime')}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />
              <DivDadosProvider>
                <Name>{provider.name}</Name>
                <DivDetalhesProvider>
                  <DivDetalhes1Provider>
                    <Description>Nome: Alisson Renan Macedo</Description>
                  </DivDetalhes1Provider>
                  <DivDetalhes1Provider>
                    <Description style={{ fontSize: 9 }}>
                      Experiencia: 2 anos
                    </Description>
                    <Description style={{ fontSize: 9 }}>
                      Apelido: Cisco
                    </Description>
                  </DivDetalhes1Provider>
                  <DivDetalhes1Provider>
                    <Description style={{ fontSize: 8 }}>
                      Cortes: Corte 1, Corte 2, Corte 3
                    </Description>
                  </DivDetalhes1Provider>
                </DivDetalhesProvider>
              </DivDadosProvider>
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
        navigation.navigate('SelectHairStyle');
      }}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});

export default SelectProvider;
