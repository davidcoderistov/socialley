import React, { useState, useEffect } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'


interface Props {
    open: boolean
    refreshingSession: boolean
    invalidatingSession: boolean
    onRefreshSession: () => void
    onInvalidateSession: () => void
}

export default function SessionModal ({ open, refreshingSession, invalidatingSession, onRefreshSession, onInvalidateSession }: Props) {

    const [seconds, setSeconds] = useState(60)

    useEffect(() => {
        if (open) {
            if (seconds > 0) {
                setTimeout(() => {
                    setSeconds(seconds - 1)
                }, 1000)
            } else {
                onInvalidateSession()
            }
        } else {
            setSeconds(60)
        }
    }, [open, seconds])

    return (
        <Dialog
            open={open}
        >
            <DialogTitle>
                Session Expire
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Your session expires in { seconds } { seconds === 1 ? 'second' : 'seconds' }. Do you want to stay logged in?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <LoadingButton
                    loading={invalidatingSession}
                    disabled={refreshingSession}
                    onClick={onInvalidateSession}
                >
                    No
                </LoadingButton>
                <LoadingButton
                    variant='contained'
                    loading={refreshingSession}
                    disabled={invalidatingSession}
                    onClick={onRefreshSession}
                >
                    Yes
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}