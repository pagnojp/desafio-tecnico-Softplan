import React from 'react';

import {
  Container, Form, ListContainer, CardLocal,
} from './styles';
import Header from '../../components/Header';
import CharactersList from '../../components/CharactersList';

// Mostrar salvos no localstorage
const local = JSON.parse(
  window.localStorage.getItem('@softplanMarvel'),
);
if (!local) {
  window.localStorage.setItem('@softplanMarvel', '[]');
}
function LocalCharacters() {
  const localCharacters = JSON.parse(localStorage.getItem('@softplanMarvel'));
  return localCharacters.map(({ id, name }) => (
    <CardLocal key={Math.random() + id}>
      <img src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" alt={name} />
      <h2>{name}</h2>
      {/* <button type="button" onClick={() => {}}>Remover</button> */}
    </CardLocal>
  ));
}

const Main = () => (
  <>
    <Container>
      <Header />
      <Form>
        <input
          type="text"
          placeholder="Pesquisar"
        />
        <button type="submit">OK</button>
      </Form>
      <ListContainer>
        <LocalCharacters />
        <CharactersList />
      </ListContainer>
    </Container>
  </>
);

export default Main;
