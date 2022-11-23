import React, { useMemo } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ChatUserAvatar from './ChatUserAvatar'
import moment from 'moment'


function getAgo (timestamp: string) {
    const now = moment()
    const ago = moment(timestamp)

    if (now.diff(ago, 'seconds') < 1) {
        return 'Now'
    } else if (now.diff(ago, 'minutes') < 1) {
        return `${now.diff(ago, 'seconds')}s`
    } else if (now.diff(ago, 'minutes') < 60) {
        return `${now.diff(ago, 'minutes')}m`
    } else if (now.diff(ago, 'hours') < 24) {
        return `${now.diff(ago, 'hours')}h`
    } else if (now.diff(ago, 'days') < 7) {
        return `${now.diff(ago, 'days')}d`
    } else {
        return `${now.diff(ago, 'weeks')}w`
    }
}

interface Props {
    firstName: string
    lastName: string
    message: string
    timestamp: string
    selected: boolean
    onClick: () => void
}

export default function ChatUserItem (props: Props) {

    const ago = useMemo(() => getAgo(props.timestamp), [props.timestamp])

    const handleClick = () => {
        if (!props.selected) {
            props.onClick()
        }
    }

    return (
        <Box
            component='div'
            display='flex'
            flexDirection='row'
            columnGap='10px'
            px='20px'
            py='5px'
            sx={{
                ...props.selected && { backgroundColor: '#1E1E1E', },
                ...!props.selected && { '&:hover': { backgroundColor: '#121212', cursor: 'pointer', } },
            }}
            onClick={handleClick}
        >
            <ChatUserAvatar
                firstName={props.firstName}
                lastName={props.lastName} />
            <Box
                component='div'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                minWidth={0}
            >
                <Typography
                    variant='body1'
                    noWrap
                >
                    { props.firstName} {props.lastName }
                </Typography>
                <Box
                    component='div'
                    display='flex'
                    flexDirection='row'
                    columnGap='4px'
                >
                    <Typography
                        variant='body2'
                        color='#8E8E8E'
                        noWrap
                    >{ props.message }</Typography>
                    <Typography
                        variant='body2'
                        color='#8E8E8E'
                    >&middot;</Typography>
                    <Typography
                        variant='body2'
                        color='#8E8E8E'
                    >{ ago }</Typography>
                </Box>
            </Box>
        </Box>
    )
}