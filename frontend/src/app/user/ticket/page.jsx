import React from 'react'
import TicketArt from '../../components/user/ticket/TicketArt'
import TicketDetails from '../../components/user/ticket/TicketDetails'
import TicketActivity from '../../components/user/ticket/TicketActivity'
import Header from '../../components/header'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { MessageSquare } from 'react-feather'

export default function page() {
    return (
        <>
            <Header />
            <Grid container p={6} spacing={4}>
                <Grid item xs={12} container spacing={4}>
                    <Grid item xs={5}>
                        <TicketArt />
                    </Grid>
                    <Grid item container xs={7} spacing={2}>
                        <Grid item xs={12} container display="inline-flex" justifyContent={"space-between"} alignItems={"flex-start"} height={"10%"}>
                            <Typography variant='h5' fontFamily={'sans-serif'}>Coldplay Music Of The Spheres #165</Typography>
                            <Box>
                                <Button variant="outlined" sx={{ background: "pink" }} endIcon={<MessageSquare />}>Chat with Owner</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} height={"10%"}>
                            <TicketDetails />
                        </Grid>
                        <Grid item xs={12} height={"80%"}>
                            <TicketDetails />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <TicketActivity />
                </Grid>
            </Grid >
        </>
    )


}