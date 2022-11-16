import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client'
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

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export default client