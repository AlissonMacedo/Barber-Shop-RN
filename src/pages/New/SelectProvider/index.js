import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Texto } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SelectProvider() {
  return (
    <>
      <Container>
        <Texto>Select Provider</Texto>
      </Container>
    </>
  );
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
