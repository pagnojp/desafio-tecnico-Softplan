import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from './styles';

const CharactersList = () => (
  <Container>
    <Link to="/character/1">
      <Card>
        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg" alt="3d" />
        <h2>3-D MAN</h2>
      </Card>
    </Link>
  </Container>
);

export default CharactersList;
