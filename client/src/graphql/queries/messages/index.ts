import { gql } from '@apollo/client'


export const GET_LATEST_MESSAGES = gql`
    query getLatestMessages($paginationData: LatestMessagesPaginationData) {
        getLatestMessages(paginationData: $paginationData) {
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