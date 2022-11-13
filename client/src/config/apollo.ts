import { ApolloClient, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
    uri: 'http://localhost:5000/api',
    cache: new InMemoryCache(),
    credentials: 'include',
})

export default client