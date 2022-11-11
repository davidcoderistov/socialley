import React from 'react'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/material'


interface Props {
    sx?: SxProps
}

export default function Copyright (props: Props) {

    return (
        <Typography variant='body2' color='text.secondary' align='center' sx={props.sx}>
            {'Copyright © '}
            {'Socialley '}
            { new Date().getFullYear() }
            {'.'}
        </Typography>
    )
}


