import React, { useState } from 'react';
import { View, Text } from 'react-native';

import DateInput from '~/components/DateInput';

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState('019-08-29T19:00:00.000Z');
  const hours = [
    {
      time: '12:30',
    },
    {
      time: '12:35',
    },
    {
      time: '12:40',
    },
    {
      time: '12:50',
    },
    {
      time: '13:50',
    },
    {
      time: '15:40',
    },
  ];

  console.log(hours);

  return (
    <>
      <Container>
        <HourList
          data={hours}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => this.props.navigation.navigate('OverViewBarber')}>
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </>
  );
}
