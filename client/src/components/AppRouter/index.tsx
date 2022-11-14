import React, { useState, useEffect } from 'react'
import AppContext, { User } from '../../config/context'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { REFRESH } from '../../graphql/mutations/auth'
import LoginPage from '../../pages/LoginPage'
import SignUpPage from '../../pages/SignUpPage'
import HomePage from '../../pages/HomePage'


export default function AppRouter () {

    const [loggedInUser, setLoggedInUser] = useState<User | null>(null)

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

    return loading ? (
        <div>
            LOADING
        </div>
    ) : loggedInUser ? (
        <AppContext.Provider value={{ loggedInUser }}>
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
    )
}