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

export const isInvalidSessionError = (err: any): boolean => {
    if (err instanceof ApolloError) {
        if (err.graphQLErrors.length > 0) {
            return err.graphQLErrors[0].extensions.code === GRAPHQL_ERROR_CODES.INVALID_SESSION
        }
    }
    return false
}

export const getInitial = (name: string): string | null => {
    if (name.length > 0) {
        return name.charAt(0).toUpperCase()
    }
    return null
}