import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import {
  Container,
  ContainerFront,
  CardAccount,
  ImageButton,
  ButtonCard,
} from './styles';
import logo from '~/assets/logo-barber.png';
import SelectAccount01 from '~/assets/selectAccount01.jpeg';
import SelectAccount02 from '~/assets/selectAccount02.png';
import Header from '~/components/Header';

export default function SelectAccountType() {
  return (
    <>
      <Header namePage={'Selecione Tipo de Conta'} />
      <Container>
        <ImageBackground
          source={logo}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain">
          <ContainerFront>
            <CardAccount>
              <ButtonCard>
                <Text style={{ fontSize: 24 }}>Profissional</Text>
              </ButtonCard>
              <ImageButton
                source={SelectAccount01}
                style={{ width: '100%', height: '100%' }}
              />
            </CardAccount>
            <CardAccount>
              <ButtonCard>
                <Text style={{ fontSize: 24 }}>Cliente</Text>
              </ButtonCard>
              <ImageButton
                source={SelectAccount02}
                style={{ width: '100%', height: '100%' }}
              />
            </CardAccount>
          </ContainerFront>
        </ImageBackground>
      </Container>
    </>
  );
}
