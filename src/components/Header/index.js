import React from 'react';

import logo from '~/assets/logo-barber.png';

import { Container, Logo, Texto } from './styles';

export default function Header({ namePage }) {
  return (
    <Container>
      <Logo source={logo} />
      <Texto>{namePage}</Texto>
    </Container>
  );
}
