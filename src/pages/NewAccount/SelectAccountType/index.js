import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View, Text } from 'react-native';

import {
  Container,
  ContainerFront,
  CardAccount,
  ImageButton,
  ButtonCard,
} from './styles';
import SelectAccount01 from '~/assets/selectAccount01.jpeg';
import SelectAccount02 from '~/assets/selectAccount02.png';
import Header from '~/components/Header';

export default function SelectAccountType({ navigation }) {
  return (
    <>
      <Container>
        <ContainerFront>
          <CardAccount onPress={() => navigation.navigate('SignUpBarber')}>
            <ButtonCard>
              <Text style={{ fontSize: 24, color: '#000' }}>Profissional</Text>
            </ButtonCard>
            <ImageButton
              source={SelectAccount01}
              style={{ width: '100%', height: '100%' }}
            />
          </CardAccount>
          <CardAccount>
            <ButtonCard>
              <Text style={{ fontSize: 24, color: '#000' }}>Cliente</Text>
            </ButtonCard>
            <ImageButton
              source={SelectAccount02}
              style={{ width: '100%', height: '100%' }}
            />
          </CardAccount>
        </ContainerFront>
      </Container>
    </>
  );
}

SelectAccountType.navigationOptions = ({ navigation }) => ({
  title: 'Crie sua conta como',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Sign');
      }}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
