import { createContext } from 'react'


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
}

export default createContext<AppContext>({ loggedInUser: null })

