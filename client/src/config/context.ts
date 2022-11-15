import { createContext } from 'react'
import { User } from '../types'


export interface AppContext {
    loggedInUser: User | null
    setLoggedInUser: (user: User) => void
}

export default createContext<AppContext>({
    loggedInUser: null,
    setLoggedInUser: () => {},
})