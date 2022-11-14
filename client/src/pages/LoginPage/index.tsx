import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../config/context'
import { useSnackbar } from 'notistack'
import Login, { SignInProps } from '../../components/Login'
import { useMutation, ApolloError } from '@apollo/client'
import { LOGIN } from '../../graphql/mutations/auth'
import { getValidationError } from '../../utils'


export default function LoginPage () {

    const { setLoggedInUser } = useContext(AppContext)

    const navigate = useNavigate()

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
        }).then(({ data }) => {
            setLoggedInUser({
                _id: data.login._id,
                firstName: data.login.firstName,
                lastName: data.login.lastName,
                username: data.login.username,
                email: data.login.email,
                accessToken: data.login.accessToken,
            })
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
        navigate('/signup')
    }

    return (
        <Login
            onSignIn={handleSignIn}
            onSignUp={handleSignUp}
            signingIn={loading} />
    )
}