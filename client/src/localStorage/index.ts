import store from 'store'
import { User } from '../types'


export function setStorageLoggedInUser (user: User | null) {
    store.set('loggedInUser', user)
}

export function getStorageLoggedInUser (): User | null {
    return store.get('loggedInUser') ?? null
}