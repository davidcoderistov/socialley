import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CreateIcon from '@mui/icons-material/Create'
import ChatUserListItem from './ChatUserListItem'


interface User {
    _id: string
    firstName: string
    lastName: string
    photoURL?: string
    selected: boolean
    message: string
    timestamp: string
}

interface Props {
    username: string
    onViewProfile: () => void
    onMessage: () => void
    users: User[]
    onClickUser: (_id: string) => void
}

export default function ChatUserList (props: Props) {

    return (
        <Box
            component='div'
            alignItems='stretch'
            border='0'
            borderRight='1px solid #363636'
            boxSizing='border-box'
            display='flex'
            flexDirection='column'
            flexShrink='0'
            height='100%'
            margin='0'
            overflow='hidden'
            padding='0'
            position='relative'
            width='350px'
            sx={{ verticalAlign: 'baseline' }}
        >
            <Box
                component='div'
                borderBottom='1px solid #363636'
                boxSizing='border-box'
                display='flex'
                flexDirection='column'
                flexWrap='wrap'
                fontSize='16px'
                fontWeight='600'
                height='60px'
                padding='0 20px'
                width='100%'
                zIndex='2'
            >
                <Box
                    component='div'
                    alignItems='center'
                    display='flex'
                    flexDirection='row'
                    height='inherit'
                    justifyContent='space-between'
                    width='100%'
                >
                    <Box
                        component='div'
                        marginRight='8px'
                        display='flex'
                        flexBasis='32px'
                        flexDirection='row'
                    />
                    <Box
                        component='div'
                        alignItems='center'
                        color='#FFFFFF'
                        display='inline-block'
                        flexBasis='0px'
                        flexGrow='1'
                        flexShrink='1'
                        justifyContent='center'
                        minWidth='0'
                        textAlign='center'
                        overflow='hidden'
                        textOverflow='ellipsis'
                        whiteSpace='nowrap'
                    >
                        <Box
                            component='div'
                            width='100%'
                            flex='0 0 auto'
                            justifyContent='flex-start'
                            flexDirection='column'
                            alignItems='stretch'
                            alignContent='stretch'
                            display='flex'
                            boxSizing='border-box'
                            position='relative'
                        >
                            <Typography
                                component='div'
                                variant='body1'
                                sx={{ cursor: 'pointer' }}
                                onClick={props.onViewProfile}
                            >
                                { props.username }
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        component='div'
                        justifyContent='flex-end'
                        marginLeft='8px'
                        display='flex'
                        flexBasis='32px'
                        flexDirection='row'
                    >
                        <IconButton sx={{ color: '#FFFFFF' }} onClick={props.onMessage}>
                            <CreateIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box
                component='div'
                height='100%'
                overflow='hidden'
                flex='0 0 auto'
                justifyContent='flex-start'
                flexDirection='column'
                alignItems='stretch'
                alignContent='stretch'
                display='flex'
                boxSizing='border-box'
                position='relative'
            >
                <Box
                    component='div'
                    height='100%'
                    flex='1 1 auto'
                    minHeight='0'
                    minWidth='0'
                    justifyContent='flex-start'
                    flexDirection='column'
                    alignItems='stretch'
                    alignContent='stretch'
                    display='flex'
                    boxSizing='border-box'
                    position='relative'
                >
                    <Box
                        component='div'
                        display='block'
                        overflow='hidden'
                        height='calc(100% - 44px)'
                    >
                        <Box
                            component='div'
                            display='block'
                            height='100%'
                            overflow='hidden auto'
                            paddingTop='8px'
                            sx={{ overscrollBehavior: 'contain' }}
                        >
                            <Box
                                component='div'
                                display='flex'
                                position='relative'
                                flexDirection='column'
                                paddingY='0'
                            >
                                { props.users.map(user => (
                                    <ChatUserListItem
                                        key={user._id}
                                        _id={user._id}
                                        firstName={user.firstName}
                                        lastName={user.lastName}
                                        photoURL={user.photoURL}
                                        message={user.message}
                                        timestamp={user.timestamp}
                                        selected={user.selected}
                                        onClick={(_id) => props.onClickUser(_id)} />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}