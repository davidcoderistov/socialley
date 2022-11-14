import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { SnackbarProvider } from 'notistack'
import client from './config/apollo'
import AppRouter from './components/AppRouter'


function App() {

  return (
      <ApolloProvider client={client}>
          <Router>
              <SnackbarProvider maxSnack={1}>
                  <AppRouter />
              </SnackbarProvider>
          </Router>
      </ApolloProvider>
  )
}

export default App