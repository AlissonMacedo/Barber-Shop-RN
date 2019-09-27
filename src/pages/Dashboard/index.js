import React from 'react';
import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';
import Apointments from '~/components/Apointments';

export default function Dashboard() {
  const { date } = '10/10/2019';
  return (
    <>
      <Header namePage={'Lista de Agendamentos'} />
      <Container>
        <Apointments nome={'Alisson Macedo'} data={'10/09/2019'} />
        <Apointments nome={'Alisson Macedo'} data={'10/09/2019'} />
        <Apointments nome={'Alisson Macedo'} data={'10/09/2019'} />
      </Container>
    </>
  );
}

console.disableYellowBox = true;

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
