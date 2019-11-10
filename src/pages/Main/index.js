import React from 'react';
import { Container, Form } from './styles';
import Header from '../../components/Header';
import CharactersList from '../../components/CharactersList';

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
      <CharactersList />
    </Container>
  </>
);

export default Main;
