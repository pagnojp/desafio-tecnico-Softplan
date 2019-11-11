import React from 'react';
import Header from '../../components/Header';
import { Container, FormContainer, Form } from './styles';

const EditCharacter = () => (
  <>
    <Container>
      <Header />
      <FormContainer>
        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg" alt="3d" />
        <Form>
          <input
            type="text"
            placeholder="3D-MAN"
          />
          <button type="submit">Editar</button>
        </Form>
      </FormContainer>
    </Container>
  </>
);

export default EditCharacter;
