import React, { useState } from 'react'
import SignUp, { SignUpProps } from '../../components/SignUp'
import { useMutation, ApolloError } from '@apollo/client'
import { SIGN_UP } from '../../graphql/mutations/auth'
import { getValidationError } from '../../utils'


export default function SignUpPage () {

    const [signUp, { loading }] = useMutation(SIGN_UP)

    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleSignUp = (signUpProps: SignUpProps) => {
        setErrorMessage(null)
        signUp({
            variables: {
                user: {
                    firstName: signUpProps.data.firstName,
                    lastName: signUpProps.data.lastName,
                    username: signUpProps.data.username,
                    email: signUpProps.data.email,
                    password: signUpProps.data.password,
                }
            }
        }).catch((err: ApolloError) => {
            const validationError = getValidationError(err)
            if (validationError) {
                if (validationError.firstName) {
                    return signUpProps.setServerError('firstName', validationError.firstName)
                } else if (validationError.lastName) {
                    return signUpProps.setServerError('lastName', validationError.lastName)
                } else if (validationError.username) {
                    return signUpProps.setServerError('username', validationError.username)
                } else if (validationError.email) {
                    return signUpProps.setServerError('email', validationError.email)
                } else if (validationError.password) {
                    return signUpProps.setServerError('password', validationError.password)
                }
            }
            setErrorMessage('Could not sign up. Please try again later')
        })
    }

    const handleSignIn = () => {

    }

    return (
        <SignUp
            onSignUp={handleSignUp}
            onSignIn={handleSignIn}
            signingUp={loading}
            errorMessage={errorMessage} />
    )
}