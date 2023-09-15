import React from 'react'
import { Grid, IconButton, Tooltip, Typography } from '@mui/material'

export default function TicketEventDetails() {
    return (
        <Grid container spacing={3} p={4}>
            <Grid item xs={12} container>
                <Grid item xs={4} display={'inline-flex'}>
                    <Tooltip title="Current owner of this ticket" ><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginRight: 1 }} /></Tooltip>
                    <Typography variant='body1' color={"#5A5A5A"} rel="preconnect">Date:</Typography>
                </Grid>
                <Grid item xs={8} display={'inline-flex'}>
                    30 Jan 2024, Tuesday
                </Grid>
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={4} display={'inline-flex'}>
                    <Tooltip title="Last sale price for this Ticket" ><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginRight: 1 }} /></Tooltip>
                    <Typography variant='body1' color={"#5A5A5A"} rel="preconnect">Time &#40;Duration&#41;:</Typography>
                </Grid>
                <Grid item xs={8} display={'inline-flex'}>
                    7:00pm &#40;120min&#41;
                </Grid>
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={4} display={'inline-flex'}>
                    <Tooltip title="Last sale price for this Ticket" ><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginRight: 1 }} /></Tooltip>
                    <Typography variant='body1' color={"#5A5A5A"} rel="preconnect">Venue:</Typography>
                </Grid>
                <Grid item xs={8}>
                    National Stadium, 1 Stadium Dr, Singapore 397629
                </Grid>
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={4} display={'inline-flex'}>
                    <Tooltip title="Last sale price for this Ticket" ><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginRight: 1 }} /></Tooltip>
                    <Typography variant='body1' color={"#5A5A5A"} rel="preconnect">Section:</Typography>
                </Grid>
                <Grid item xs={8}>
                    General Standing
                </Grid>
            </Grid>

        </Grid >
    )
}
