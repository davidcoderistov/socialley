import React from 'react'
import Typography from '@mui/material/Typography'


interface Props {
    text: string
    onClick: () => void
}

export default function NoticeButton ({ text, onClick }: Props) {

    return (
        <Typography
            component='span'
            variant='body2'
            color='primary.main'
            sx={{ cursor: 'pointer' }}
            onClick={onClick}
        >{ text }</Typography>
    )
}