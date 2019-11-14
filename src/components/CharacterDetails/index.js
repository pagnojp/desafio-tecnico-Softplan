import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Container } from './styles';

const CharacterDetails = () => {
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
        <img src={data.characters[0].thumbnail} alt={data.characters[0].name} />
        <div>
          <h2>
            {data.characters[0].name}
            <Link to={`/edit/${id}`}>Editar</Link>
          </h2>
          <h3>Séries:</h3>
          <ul>
            { data.characters[0].series.map(({ name }) => (
              <li key={name}>
                -
                {' '}
                {name}
              </li>
            )) }
          </ul>
          <Link className="backToHome" to="/">VOLTAR</Link>
        </div>
      </Container>
    </>
  );
};

export default CharacterDetails;
