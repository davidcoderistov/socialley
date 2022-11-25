import React, { useMemo } from 'react'
import Avatar from '@mui/material/Avatar'
import { getInitial } from '../../utils'


interface Props {
    firstName: string
    lastName: string
    photoURL?: string
    size?: number
    fontSize?: number
}

export default function UserAvatar ({ firstName, lastName, size = 56, fontSize }: Props) {

    const firstInitial = useMemo(() => getInitial(firstName), [firstName])
    const secondInitial = useMemo(() => getInitial(lastName), [lastName])

    return (
        <Avatar sx={{ width: size, height: size, backgroundColor: '#2C3539', ...fontSize && { fontSize }}}>
            {firstInitial}{secondInitial}
        </Avatar>
    )
}

