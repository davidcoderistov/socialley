import React, { useState } from 'react'
import { styled } from '@mui/material'
import NavItem, { NavType } from './NavItem'
import { NavLink as Link } from 'react-router-dom'


const StyledLink = styled(Link)({
    color: 'black',
    textDecoration: 'none',
})

export interface NavLinkProps {
    to: string
    type: NavType
}

export default function NavLink ({ to, type }: NavLinkProps) {

    const [isHovered, setIsHovered] = useState(false)

    const handleOnMouseEnter = () => {
        setIsHovered(true)
    }

    const handleOnMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <StyledLink
            to={to}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            {({ isActive }) => (
                <NavItem
                    active={isActive}
                    hovered={isHovered}
                    type={type} />
            )}
        </StyledLink>
    )
}