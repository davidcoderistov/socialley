import React from 'react'
import { Box } from '@mui/material'


export default function AuthError ({ message }: { message: string }) {

    return (
        <Box component='div' sx={{
            color: '#d32f2f',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '1.66',
            letterSpacing: '0.03333em',
            textAlign: 'left',
            marginTop: '3px',
            marginX: '14px',
        }}>
            { message }
        </Box>
    )
}