import React, { useMemo } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import moment from 'moment'


interface Props {
    timestamp: string
}

export default function MessageSeparator (props: Props) {

    const ago = useMemo(() => {
        const now = moment()
        const date = moment(props.timestamp)
        const diffInDays = now.diff(date, 'days')
        if (diffInDays < 1) {
            return date.format('LT')
        } else if (diffInDays < 2) {
            return `Yesterday ${date.format('LT')}`
        } else if (diffInDays < 7) {
            return date.format('dddd LT')
        } else {
            return date.format('MMMM D, YYYY LT')
        }
    }, [props.timestamp])

    return (
        <Box
            component='div'
            display='flex'
            flexDirection='column'
            flex='0 0 auto'
            justifyContent='flex-start'
            alignItems='stretch'
            alignContent='stretch'
            boxSizing='border-box'
            position='relative'
        >
            <Box
                component='div'
                display='flex'
                flexDirection='column'
                flex='0 0 auto'
                justifyContent='flex-start'
                alignItems='stretch'
                alignContent='stretch'
                boxSizing='border-box'
                position='relative'
                marginTop='12px'
                marginBottom='24px'
            >
                <Typography
                    component='div'
                    display='block'
                    textAlign='center'
                    color='#8E8E8E'
                    fontWeight='400'
                    fontSize='12px'
                    lineHeight='16px'
                    marginTop='-2px'
                    marginBottom='-3px'
                    noWrap
                >{ ago }</Typography>
            </Box>
        </Box>
    )
}