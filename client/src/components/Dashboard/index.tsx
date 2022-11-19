import React from 'react'
import {
    Container,
    Grid,
    Box,
    List,
    Drawer as MuiDrawer,
    Toolbar,
    Divider,
    CssBaseline,
    Typography,
} from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import NavLink from './NavLink'


const drawerWidth: number = 245

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
)

const mdTheme = createTheme({
    typography: {
        'fontFamily': 'Verdana',
    }
})

interface Props {
    children: any
}

export default function Dashboard (props: Props) {

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Drawer variant='permanent' open={true} PaperProps={{ sx: { backgroundColor: 'black', borderRight: '1px solid #232323' }}}>
                    <Toolbar
                        sx={{
                            pt: [4],
                            pb: [3],
                        }}
                    >
                        <Typography noWrap variant='h5' color='#FFFFFF' sx={{ fontFamily: 'Bosca' }}>
                            Socialley
                        </Typography>
                    </Toolbar>
                    <Divider />
                    <List component='nav' sx={{ paddingX: '12px' }}>
                        <NavLink to='/' type='home' />
                        <NavLink to='/messages' type='messages' />
                        <NavLink to='/profile' type='profile' />
                    </List>
                </Drawer>
                <Box
                    component='main'
                    sx={{
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        backgroundColor: 'black',
                        color: 'white'
                    }}
                >
                    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                        <Grid container>
                            <Grid container item xs={12}>
                                { props.children }
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}