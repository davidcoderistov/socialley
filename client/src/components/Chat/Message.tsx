import React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import UserAvatar from '../UserAvatar'


type MessageType = 'sent' | 'received'

interface User {
    firstName: string
    lastName: string
    photoURL?: string
}

interface Props {
    messageType: MessageType
    showAvatar?: boolean
    user?: User | null
    bubbleSxProps?: BoxProps['sx']
    bubbleProps?: BoxProps
    children: React.ReactNode
}

export default function Message (props: Props) {

    return (
        <Box
            component='div'
            flex='0 0 auto'
            justifyContent='flex-start'
            flexDirection='row'
            alignItems='flex-end'
            alignContent='stretch'
            display='flex'
            boxSizing='border-box'
            position='relative'
        >
            <Box
                component='div'
                marginRight='8px'
                marginBottom='8px'
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
                    flex='0 0 auto'
                    justifyContent='flex-end'
                    flexDirection='row'
                    alignItems='flex-end'
                    alignContent='stretch'
                    display='flex'
                    boxSizing='border-box'
                    position='relative'
                >
                    { props.showAvatar && props.user ? (
                        <UserAvatar
                            firstName={props.user.firstName}
                            lastName={props.user.lastName}
                            size={24}
                            fontSize={12} />
                    ) : (
                        <Box sx={{ width: 24, height: 24 }} />
                    )}
                </Box>
            </Box>
            <Box
                component='div'
                alignItems='stretch'
                border='0'
                boxSizing='border-box'
                display='flex'
                flexDirection='column'
                flex='1 0 auto'
                margin={0}
                padding={0}
                position='relative'
                sx={{ verticalAlign: 'baseline' }}
            >
                <Box
                    component='div'
                    flexDirection='column'
                    display='flex'
                >
                    <Box
                        component='div'
                        alignSelf={props.messageType === 'received' ? 'flex-start' : 'flex-end'}
                        borderRadius='22px'
                        display='flex'
                        justifyContent='center'
                        minHeight='44px'
                        sx={{ cursor: 'default' }}
                    >
                        <Box
                            component='div'
                            flexDirection='row-reverse'
                            justifyContent='flex-end'
                            alignItems='center'
                            display='flex'
                            position='relative'
                        >
                            <Box
                                component='div'
                                display='block'
                                marginBottom='8px'
                            >
                                <Box
                                    component='div'
                                    border='1px solid #262626'
                                    alignSelf='flex-start'
                                    borderRadius='22px'
                                    boxSizing='border-box'
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='center'
                                    maxWidth='236px'
                                    minHeight='44px'
                                    overflow='hidden'
                                    zIndex='1'
                                    {...props.bubbleSxProps && { sx: {...props.bubbleSxProps}}}
                                    {...props.bubbleProps}
                                >
                                    <Box
                                        component='div'
                                        alignItems='stretch'
                                        border='0'
                                        boxSizing='border-box'
                                        display='flex'
                                        flexDirection='column'
                                        flex='0 0 auto'
                                        margin={0}
                                        padding={0}
                                        position='relative'
                                        sx={{ touchAction: 'manipulation', verticalAlign: 'baseline' }}
                                    >
                                        { props.children }
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}