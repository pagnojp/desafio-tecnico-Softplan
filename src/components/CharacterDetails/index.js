import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const CharacterDetails = () => (
  <Container>
    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg" alt="3d" />
    <h2>ALPHA THE ULTIMATE MUTANT</h2>
    <h3><Link to="/edit/1">Editar Personagem</Link></h3>
  </Container>
);

export default CharacterDetails;
