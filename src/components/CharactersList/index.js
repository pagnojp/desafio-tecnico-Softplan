import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Card } from './styles';

const CHARACTERS_LIST = gql`
  {
    characters {
      id
      name
      thumbnail
    }
  }
`;

const CharactersList = () => {
  const { loading, error, data } = useQuery(CHARACTERS_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.map(({ id, name, thumbnail }) => (
    <Link to={`/character/${id}`} key={id}>
      <Card>
        <img src={thumbnail} alt={name} />
        <h2>{name}</h2>
      </Card>
    </Link>
  ));
};

export default CharactersList;
