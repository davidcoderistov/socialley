import { ApolloError } from '@apollo/client'


export const GRAPHQL_ERROR_CODES = {
    MONGODB_VALIDATION_FAILED: 'MONGODB_VALIDATION_FAILED',
    MONGODB_SERVER_ERROR: 'MONGODB_SERVER_ERROR',
    INVALID_SESSION: 'INVALID_SESSION',
}

interface ValidationError {
    [path: string]: string
}

export const getValidationError = (err: ApolloError): ValidationError | null => {
    if (err.graphQLErrors.length > 0) {
        const error = err.graphQLErrors[0]
        if (error.extensions.code === GRAPHQL_ERROR_CODES.MONGODB_VALIDATION_FAILED) {
            return error.extensions.errors as ValidationError
        }
    }
    return null
}