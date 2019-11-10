import React from 'react';
import { Container, Form } from './styles';
import Header from '../../components/Header';

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
    </Container>
  </>
);

export default Main;
