import React from 'react'
import { useSnackbar } from 'notistack'
import Login, { SignInProps } from '../../components/Login'
import { useMutation, ApolloError } from '@apollo/client'
import { LOGIN } from '../../graphql/mutations/auth'
import { getValidationError } from '../../utils'


export default function LoginPage () {

    const [login, { loading }] = useMutation(LOGIN)

    const { enqueueSnackbar } = useSnackbar()

    const handleSignIn = (signInProps: SignInProps) => {
        login({
            variables: {
                user: {
                    username: signInProps.data.username,
                    password: signInProps.data.password,
                }
            }
        }).catch((err: ApolloError) => {
            const validationError = getValidationError(err)
            if (validationError?.username) {
                return signInProps.setServerError('username', validationError.username)
            } else if (validationError?.password) {
                return signInProps.setServerError('password', validationError.password)
            }
            enqueueSnackbar('Could not sign in. Please try again later', { variant: 'error' })
        })
    }

    const handleSignUp = () => {

    }

    return (
        <Login
            onSignIn={handleSignIn}
            onSignUp={handleSignUp}
            signingIn={loading} />
    )
}