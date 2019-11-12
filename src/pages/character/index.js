import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';
import CharacterDetails from '../../components/CharacterDetails';

const Character = () => (
  <>
    <Container>
      <Header />
      <CharacterDetails />
    </Container>
  </>
);

export default Character;
