import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Header from '../../components/Header';
import { Container, FormContainer, Form } from './styles';

function useEdit() {
  const [entries, setEntries] = useState([]);

  const getEntriesFromStorage = () => JSON.parse(
    window.localStorage.getItem('@softplanMarvel'),
  );
  const setEntriesToStorage = (items) => window.localStorage.setItem('@softplanMarvel', JSON.stringify(items));
  useEffect(() => {
    const entriesFromStorage = getEntriesFromStorage();
    if (entriesFromStorage) {
      setEntries(entriesFromStorage);
    }
  }, []);

  const storeEntry = (entry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    setEntriesToStorage(newEntries);
  };

  return [entries, storeEntry];
}

// eslint-disable-next-line react/prop-types
function Entry({ addEntry }) {
  const [id, setId] = useState(useParams());
  const [name, setName] = useState('');
  const [toHome, setToHome] = useState(false);
  const handleOnChange = (e) => setName(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (name && name.trim().length > 0) {
      addEntry({
        id,
        name,
      });
      setId('');
      setName('');
      setToHome(true);
    }
  };
  const CHARACTER = gql`
  {
    characters(where: { id: ${id.id} }) {
      id
      name
      thumbnail
    }
  }
`;
  const { loading, error, data } = useQuery(CHARACTER);

  if (toHome) {
    return (<Redirect to="/" />);
  }

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
          <Form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder={data.characters[0].name}
                value={name}
                onChange={handleOnChange}
              />
            </div>
            <button type="submit">Editar</button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
}

function EditCharacter() {
  const [entries, storeEntry] = useEdit();
  const handleAddEntry = (entry) => storeEntry(entry);
  return (
    <div className="container">
      <Entry addEntry={handleAddEntry} list={entries} />
    </div>
  );
}

export default EditCharacter;
