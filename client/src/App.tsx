import React from 'react';
import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'
import LandingPage from './pages/LandingPage'


function App() {

  return (
      <ApolloProvider client={client}>
          <LandingPage />
      </ApolloProvider>
  )
}

export default App