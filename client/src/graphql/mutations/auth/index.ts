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