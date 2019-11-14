import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Header from '../../components/Header';

import {
  Container, Form, ListContainer, CardLocal, Card,
} from './styles';

// Verificar e Mostrar salvos no localstorage
const local = JSON.parse(
  window.localStorage.getItem('@softplanMarvel'),
);
if (!local) {
  window.localStorage.setItem('@softplanMarvel', '[]');
}

function LocalCharacters() {
  const localCharacters = JSON.parse(localStorage.getItem('@softplanMarvel'));
  // const [list, updateList] = useState(localCharacters);
  // const handleRemoveItem = ({ id }) => {
  //   updateList(list.filter((item) => item.id.id !== id));
  //   window.localStorage.setItem('@softplanMarvel', JSON.stringify(list));
  // };

  return localCharacters.map(({ id, name }) => (
    <CardLocal key={Math.random() + id}>
      <img src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" alt={name} />
      <h2>{name}</h2>
      {/* <button type="button" onClick={() => handleRemoveItem(id)}>Remover</button> */}
    </CardLocal>
  ));
}

export default function Main() {
  const [filter, setFilter] = useState([]);
  const [showLocal, setshowLocal] = useState(true);
  const CHARACTERS_LIST = gql`
    {
      characters {
        id
        name
        thumbnail
      }
    }`;

  const { loading, error, data } = useQuery(CHARACTERS_LIST);

  useEffect(() => {
    if (data) {
      setFilter(data.characters);
    }
  }, [data]);

  function handleChange(event) {
    setshowLocal(false);
    setFilter(data.characters.filter((char) => {
      const { name } = char;
      return name.toLowerCase().search(
        event.target.value.toLowerCase(),
      ) !== -1;
    }));
  }

  return (
    <>
      <Container>
        <Header />
        <Form>
          <input
            type="search"
            onChange={handleChange}
            placeholder="Pesquisar"
          />
          <button type="submit">OK</button>
        </Form>
        { error ? (<Container>erro :( </Container>) : ('') }
        { loading ? (<Container>loading</Container>) : (
          <>
            <ListContainer>
              { showLocal ? (<LocalCharacters />) : ('') }
              {/* <LocalCharacters /> */}
              {filter.map((char) => (
                <Link to={`/character/${char.id}`} key={char.id}>
                  <Card>
                    <img src={char.thumbnail} alt={char.name} />
                    <h2>{char.name}</h2>
                  </Card>
                </Link>
              ))}
            </ListContainer>
          </>
        )}
      </Container>
    </>
  );
}
