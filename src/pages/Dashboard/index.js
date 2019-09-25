import React from 'react';
import { View } from 'react-native';
import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container />
    </>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
