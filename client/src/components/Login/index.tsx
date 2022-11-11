import React from 'react'
import Avatar from '@mui/material/Avatar'
import LoadingButton from '@mui/lab/LoadingButton'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import PasswordInput from '../PasswordInput'
import NoticeButton from '../NoticeButton'
import Copyright from '../Copyright'


interface Props {
    username: string
    usernameError?: boolean
    usernameErrorMessage?: string
    onChangeUsername: (username: string) => void
    password: string
    passwordError?: boolean
    passwordErrorMessage?: string
    onChangePassword: (password: string) => void
    onSignIn: () => void
    onSignUp: () => void
    signingIn: boolean
}

export default function Login (props: Props) {

    const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onSignIn()
    }

    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChangeUsername(event.target.value)
    }

    const handleChangePassword = (password: string) => {
        props.onChangePassword(password)
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: '#ff007f' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <Box component='form' onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
                    <TextField
                        value={props.username}
                        onChange={handleChangeUsername}
                        sx={{ mt: 2 }}
                        error={props.usernameError}
                        helperText={props.usernameError && props.usernameErrorMessage ? props.usernameErrorMessage : ''}
                        required
                        fullWidth
                        id='email'
                        label='Username'
                        name='username'
                        autoComplete='username'
                        autoFocus />
                    <PasswordInput
                        password={props.password}
                        onChangePassword={handleChangePassword}
                        sx={{ mt: 2 }}
                        error={props.passwordError}
                        errorMessage={props.passwordErrorMessage} />
                    <LoadingButton
                        type='submit'
                        fullWidth
                        variant='contained'
                        loading={props.signingIn}
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Sign In
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <NoticeButton
                                text="Don't have an account? Sign Up"
                                onClick={props.onSignUp}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}