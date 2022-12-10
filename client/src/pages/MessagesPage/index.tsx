import React, { useState, useMemo, useContext } from 'react'
import Box from '@mui/material/Box'
import ChatMessageList from '../../components/Chat/ChatMessageList'
import Chat from '../../components/Chat/Chat'
import { useQuery } from '@apollo/client'
import { GET_LATEST_MESSAGES } from '../../graphql/queries/messages'
import AppContext from '../../config/context'
import { User } from '../../types'


interface Message {
    _id: string
    userId: string
    firstName: string
    lastName: string
    photoURL?: string
    selected: boolean
    message: string
    timestamp: number
}

export default function MessagesPage () {

    const context = useContext(AppContext)
    const loggedInUser = context.loggedInUser as User

    const [selectedUserId, setSelectedUserId] = useState<string | null>(null)

    const { data, fetchMore } = useQuery(GET_LATEST_MESSAGES, {
        variables: {
            offset: 0,
            limit: 10,
        },
    })

    const total = useMemo(() => {
        const total = data?.getLatestMessages?.total
        return total ?? 0
    }, [data])

    const latestMessages = useMemo(() => {
        const latestMessages = data?.getLatestMessages?.data
        if (Array.isArray(latestMessages)) {
            return latestMessages
        }
        return []
    }, [data])

    const messages: Message[] = useMemo(() => {
        if (Array.isArray(latestMessages)) {
            return latestMessages.map(message => {
                const user = message.fromUser._id === loggedInUser._id ? message.toUser : message.fromUser
                return {
                    _id: message.messageId,
                    userId: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    message: message.message,
                    timestamp: message.createdAt,
                    selected: selectedUserId === user._id,
                }
            })
        }
        return []
    }, [latestMessages, selectedUserId])

    const handleClickUser = (_id: string) => {
        setSelectedUserId(_id)
    }

    const handleViewProfile = () => {

    }

    const handleMessage = () => {

    }

    const handleFetchMore = () => {
        fetchMore({
            variables: {
                offset: latestMessages.length,
            }
        })
    }

    return (
        <Box component='div' width='100%' height='670px'>
            <Box
                component='div'
                alignItems='center'
                border='0'
                boxSizing='border-box'
                display='flex'
                flexDirection='column'
                flexShrink='0'
                height='100%'
                margin={0}
                padding='20px'
                position='relative'
                width='100%'
                sx={{ verticalAlign: 'baseline' }}
            >
                <Box
                    component='div'
                    height='100%'
                    width='100%'
                    maxWidth='935px'
                    overflow='hidden'
                    flex='1 1 auto'
                    minHeight={0}
                    minWidth={0}
                    justifyContent='center'
                    flexDirection='row'
                    alignItems='stretch'
                    alignContent='stretch'
                    display='flex'
                    borderRadius='4px'
                    border='1px solid #262626'
                    boxSizing='border-box'
                    position='relative'
                >
                    <ChatMessageList
                        username={loggedInUser.username}
                        messages={messages}
                        onClickUser={handleClickUser}
                        onViewProfile={handleViewProfile}
                        onMessage={handleMessage}
                        onFetchMore={handleFetchMore}
                        hasMore={latestMessages.length < total} />
                    <Chat />
                </Box>
            </Box>
        </Box>
    )
}