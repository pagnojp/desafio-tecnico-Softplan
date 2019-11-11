import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';
import CharacterDetails from '../../components/CharacterDetails';
import SeriesList from '../../components/SeriesList';

const Character = () => (
  <>
    <Container>
      <Header />
      <CharacterDetails />
      <SeriesList />
    </Container>
  </>
);

export default Character;
