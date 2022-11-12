import React from 'react'
import { useForm, FieldPath } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
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


interface FormData {
    username: string
    password: string
}

interface SignInProps {
    data: FormData
    setServerError: (name: FieldPath<FormData>, message: string) => void
}

interface Props {
    onSignIn: (props: SignInProps) => void
    onSignUp: () => void
    signingIn: boolean
}

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
})

export default function Login (props: Props) {

    const { register, handleSubmit, formState: { errors }, setError } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    })

    const setServerError = (name: FieldPath<FormData>, message: string) => {
        setError(name, { message })
    }

    const handleSignIn = (data: FormData) => {
        props.onSignIn({ data, setServerError })
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
                <Box component='form' onSubmit={handleSubmit(handleSignIn)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        {...register('username')}
                        sx={{ mt: 2 }}
                        error={Boolean(errors.username)}
                        helperText={errors.username?.message as string ?? ''}
                        required
                        fullWidth
                        id='username'
                        label='Username'
                        autoComplete='username'
                        autoFocus />
                    <PasswordInput
                        {...register('password')}
                        {...{ sx: { mt: 2 }}}
                        error={Boolean(errors.password)}
                        errorMessage={errors.password?.message as string ?? ''} />
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