import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DateInput from '~/components/DateInput';

import { Container, HourList, Hour, Title } from './styles';

class SelectDateTime extends Component {
  hours = [
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

  render() {
    return (
      <>
        <Container>
          <HourList
            data={this.hours}
            keyExtractor={item => item.time}
            renderItem={({ item }) => (
              <Hour onPress={() => this.props.navigation.navigate('Confirm')}>
                <Title>{item.time}</Title>
              </Hour>
            )}
          />
        </Container>
      </>
    );
  }
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione um horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectHairStyle');
      }}>
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});

export default SelectDateTime;
