import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { REFRESH } from '../../graphql/mutations/auth'
import LoginPage from '../../pages/LoginPage'
import SignUpPage from '../../pages/SignUpPage'
import HomePage from '../../pages/HomePage'


export default function AppRouter () {

    const [refresh, { loading, error }] = useMutation(REFRESH)

    useEffect(() => {
        refresh()
    }, [])

    return loading ? (
        <div>
            LOADING
        </div>
    ) : error ? (
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
    ) : (
        <Routes>
            <Route path='/' element={
                <HomePage />
            } />
            <Route path='*' element={
                <Navigate to='/' replace />
            } />
        </Routes>
    )
}