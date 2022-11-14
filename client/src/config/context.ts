import { createContext, createRef } from 'react'


export interface User {
    _id: string
    firstName: string
    lastName: string
    username: string
    email: string
    accessToken: string
}

export interface AppContext {
    loggedInUser: User | null
    setLoggedInUser: (user: User) => void
}

export const AccessTokenRef = createRef()

export default createContext<AppContext>({
    loggedInUser: null,
    setLoggedInUser: () => {},
})