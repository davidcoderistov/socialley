import React from 'react'
import { Box, ListItemIcon, Typography, styled } from '@mui/material'
import {
    Home,
    Reply,
    AccountCircle,
} from '@mui/icons-material'


const Container = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
})

export type NavType = 'home' | 'messages' | 'profile'

interface NavItemProps {
    active: boolean
    hovered: boolean
    type: NavType
}

export default function NavItem ({ active, hovered, type }: NavItemProps) {

    const hoveredNotActive = hovered && !active

    const iconSx = {
        color: '#FFFFFF',
        fontSize: hoveredNotActive ? 32 : 30,
    }

    return (
        <Container sx={{
            marginY: '12px',
            ...hoveredNotActive && { borderRadius: '20px', backgroundColor: '#0f0f0f' },
            ...active && { borderRadius: '20px', backgroundColor: '#161616' }
        }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
                { type === 'home' && (
                    <Home sx={iconSx}/>
                )}
                { type === 'messages' && (
                    <Reply sx={iconSx}/>
                )}
                { type === 'profile' && (
                    <AccountCircle sx={iconSx}/>
                )}
            </ListItemIcon>
            <Typography noWrap marginY='4px' fontSize={15} sx={{ color: '#FFFFFF' }}>
                { type === 'home' && 'Home '}
                { type === 'messages' && 'Messages' }
                { type === 'profile' && 'Profile' }
            </Typography>
        </Container>
    )
}