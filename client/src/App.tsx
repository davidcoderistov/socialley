import React from 'react';
import { ApolloProvider } from '@apollo/client'
import { SnackbarProvider } from 'notistack'
import client from './config/apollo'
import LandingPage from './pages/LandingPage'


function App() {

  return (
      <ApolloProvider client={client}>
          <SnackbarProvider maxSnack={1}>
              <LandingPage />
          </SnackbarProvider>
      </ApolloProvider>
  )
}

export default App