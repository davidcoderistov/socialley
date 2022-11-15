import React, { useState, useEffect } from 'react'
import AppContext from '../../config/context'
import { User } from '../../types'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { REFRESH } from '../../graphql/mutations/auth'
import { setStorageLoggedInUser } from '../../localStorage'
import LoginPage from '../../pages/LoginPage'
import SignUpPage from '../../pages/SignUpPage'
import HomePage from '../../pages/HomePage'


export default function AppRouter () {

    const [loggedInUser, setUser] = useState<User | null>(null)

    const [refresh, { loading }] = useMutation(REFRESH)

    useEffect(() => {
        refresh().then(({ data }) => {
            setLoggedInUser({
                _id: data.refresh._id,
                firstName: data.refresh.firstName,
                lastName: data.refresh.lastName,
                username: data.refresh.username,
                email: data.refresh.email,
                accessToken: data.refresh.accessToken,
            })
        }).catch(() => {})
    }, [])

    const setLoggedInUser = (user: User) => {
        setStorageLoggedInUser(user)
        setUser(user)
    }

    return loading ? (
        <div>
            LOADING
        </div>
    ) : loggedInUser ? (
        <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            <Routes>
                <Route path='/' element={
                    <HomePage />
                } />
                <Route path='*' element={
                    <Navigate to='/' replace />
                } />
            </Routes>
        </AppContext.Provider>
    ) : (
        <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            <Routes>
                <Route path='/login' element={
                    <LoginPage />
                } />
                <Route path='/signup' element={
                    <SignUpPage />
                } />
                <Route path='*' element={
                    <Navigate to='/login' replace />
                } />
            </Routes>
        </AppContext.Provider>
    )
}