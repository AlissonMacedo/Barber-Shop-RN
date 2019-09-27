import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ nome, data }) {
  return (
    <Container past={false}>
      <Left>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/285/abott@adorable.pngCopy',
          }}
        />

        <Info>
          <Name>{nome}</Name>
          <Time>{data}</Time>
        </Info>
      </Left>

      <TouchableOpacity>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
