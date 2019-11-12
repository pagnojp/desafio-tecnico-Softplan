import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Header from '../../components/Header';
import { Container, FormContainer, Form } from './styles';

const EditCharacter = () => {
  const { id } = useParams();
  const CHARACTER = gql`
  {
    characters(where: { id: ${id} }) {
      id
      name
      thumbnail
      series {
        name
      }
    }
  }
`;
  const { loading, error, data } = useQuery(CHARACTER);

  if (loading) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <p>Error :(</p>
      </Container>
    );
  }
  return (
    <>
      <Container>
        <Header />
        <FormContainer>
          <img src={data.characters[0].thumbnail} alt={data.characters[0].name} />
          <Form>
            <input
              type="text"
              placeholder={data.characters[0].name}
              value={data.characters[0].name}
            />
            <button type="submit">Editar</button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default EditCharacter;
