import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import GlobalStyle from './styles/global';
import Routes from './routes';

const client = new ApolloClient({
  uri: 'https://api.marvelql.com/',
});

const App = () => (
  <>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  </>
);

export default App;
