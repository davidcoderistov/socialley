import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Message from './Message'


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
    message: string
}

export default function TextMessage (props: Props) {

    return (
        <Message
            messageType={props.messageType}
            showAvatar={props.showAvatar}
            user={props.user}
            {...props.messageType === 'sent' && { bubbleProps: { bgcolor: '#262626' }}}
        >
            <Box
                component='div'
                minHeight='44px'
                padding='16px'
                flex='0 0 auto'
                justifyContent='center'
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
                    sx={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
                >
                    <Box
                        component='div'
                        display='block'
                        marginTop='-3px'
                        marginBottom='-4px'
                        lineHeight='18px'
                        sx={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
                    >
                        <Typography
                            component='div'
                            variant='body2'
                            display='inline !important'
                            margin='0 !important'
                            lineHeight='18px'
                        >
                            { props.message }
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Message>
    )
}