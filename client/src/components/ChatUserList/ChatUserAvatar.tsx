import React, { useMemo } from 'react'
import Avatar from '@mui/material/Avatar'
import { getInitial } from '../../utils'


interface Props {
    firstName: string
    lastName: string
}

export default function ChatUserAvatar ({ firstName, lastName }: Props) {

    const firstInitial = useMemo(() => getInitial(firstName), [firstName])
    const secondInitial = useMemo(() => getInitial(lastName), [lastName])

    return (
        <Avatar sx={{width: 56, height: 56, backgroundColor: '#2C3539'}}>
            {firstInitial}{secondInitial}
        </Avatar>
    )
}