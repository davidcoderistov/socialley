import { gql } from '@apollo/client'


export const SIGN_UP = gql`
    mutation signUp($user: SignUpInput) {
        signUp(user: $user) {
            _id
            username
            firstName
            lastName
            email
            accessToken
        }
    }
`

export const LOGIN = gql`
    mutation login($user: LoginInput) {
        login(user: $user) {
            _id
            firstName
            lastName
            username
            email
            accessToken
        }
    }
`