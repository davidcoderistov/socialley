import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getStorageLoggedInUser } from '../localStorage'


const httpLink = createHttpLink({
    uri: 'http://localhost:5000/api',
    credentials: 'include',
})

const authLink = new ApolloLink((operation, forward) => {
    const user = getStorageLoggedInUser()

    operation.setContext({
        headers: {
            authorization: user?.accessToken ? `Bearer ${user.accessToken}` : "",
        }
    })

    return forward(operation)
})

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:5000/api',
    connectionParams: {
        accessToken: getStorageLoggedInUser()?.accessToken,
    }
}))

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    authLink.concat(httpLink),
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default client