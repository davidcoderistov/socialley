import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { SxProps } from '@mui/material'


interface Props {
    password: string
    onChangePassword: (password: string) => void
    error?: boolean
    errorMessage?: string
    sx?: SxProps
}

export default function PasswordInput (props: Props) {

    const [showPassword, setShowPassword] = useState(false)

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChangePassword(event.target.value)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <TextField
            value={props.password}
            onChange={handleChangePassword}
            error={props.error}
            helperText={props.errorMessage ?? ''}
            required
            fullWidth
            id='password'
            label='Password'
            name='password'
            type={showPassword ? 'text': 'password'}
            autoComplete='current-password'
            sx={props.sx}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge='end'
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}