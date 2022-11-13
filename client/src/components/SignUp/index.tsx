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
import AuthError from '../AuthError'


interface FormData {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
}

export interface SignUpProps {
    data: FormData
    setServerError: (name: FieldPath<FormData>, message: string) => void
}

interface Props {
    onSignUp: (props: SignUpProps) => void
    onSignIn: () => void
    signingUp: boolean
    errorMessage: string | null
}

const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required'),
    email: yup.string().required('Email address is required').email('Invalid email address'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
})

export default function SignUp (props: Props) {

    const { register, handleSubmit, formState: { errors }, setError } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    })

    const setServerError = (name: FieldPath<FormData>, message: string) => {
        setError(name, { message })
    }

    const handleSignUp = (data: FormData) => {
        props.onSignUp({ data, setServerError })
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
                <Typography component='h1' variant='h5' sx={{ mb: 2 }}>
                    Sign up
                </Typography>
                <Box component='form' onSubmit={handleSubmit(handleSignUp)} noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...register('firstName')}
                                error={Boolean(errors.firstName)}
                                helperText={errors.firstName?.message as string ?? ''}
                                required
                                fullWidth
                                id='firstName'
                                label='First Name'
                                autoComplete='firstName'
                                autoFocus />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...register('lastName')}
                                error={Boolean(errors.lastName)}
                                helperText={errors.lastName?.message as string ?? ''}
                                required
                                fullWidth
                                id='lastName'
                                label='Last Name'
                                autoComplete='lastName' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('username')}
                                error={Boolean(errors.username)}
                                helperText={errors.username?.message as string ?? ''}
                                required
                                fullWidth
                                id='username'
                                label='Username'
                                autoComplete='username' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('email')}
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message as string ?? ''}
                                required
                                fullWidth
                                id='email'
                                label='Email Address'
                                autoComplete='email' />
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordInput
                                {...register('password')}
                                error={Boolean(errors.password)}
                                errorMessage={errors.password?.message as string ?? ''} />
                        </Grid>
                    </Grid>
                    <LoadingButton
                        type='submit'
                        fullWidth
                        variant='contained'
                        loading={props.signingUp}
                        sx={{ mt: 2 }}
                    >
                        Sign Up
                    </LoadingButton>
                    { props.errorMessage && (
                        <AuthError message={props.errorMessage} />
                    )}
                    <Grid container justifyContent='flex-end' sx={{ mt: 2 }}>
                        <Grid item>
                            <NoticeButton
                                text="Already have an account? Sign In"
                                onClick={props.onSignIn}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 7 }} />
        </Container>
    )
}