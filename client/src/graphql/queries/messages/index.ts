import { gql } from '@apollo/client'


export const GET_LATEST_MESSAGES = gql`
    query getLatestMessages($offset: Int!, $limit: Int!) {
        getLatestMessages(offset: $offset, limit: $limit) {
            total
            data {
                messageId
                fromUser {
                    _id
                    firstName
                    lastName
                }
                toUser {
                    _id
                    firstName
                    lastName
                }
                message
                photoURL
                createdAt
            }
        }
    }    
`