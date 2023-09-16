import React from 'react'
import TicketArt from '../../../components/user/ticket/TicketArt'
import TicketStats from '../../../components/user/ticket/TicketStats'
import TicketActivity from '../../../components/user/ticket/TicketActivity'
import Header from '../../../components/header'
import { Box, Grid, Typography } from '@mui/material'
import TicketInformation from '@/app/components/user/ticket/TicketInformation'

export default function page() {

    return (
        <>
            <Header />
            <Grid container p={6} spacing={4}>
                <Grid item xs={12} container spacing={4}>
                    <Grid item xs={5}>
                        <TicketArt />
                    </Grid>
                    <Grid item xs={7}>
                        <Box sx={{ flexDirection: "column", display: "flex", alignContent: "flex-start" }}>
                            <Box my={1} sx={{ display: "inline-flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <Typography variant='h5' fontWeight='bold' fontFamily={'sans-serif'}>Coldplay Music Of The Spheres #165</Typography>
                                {/* <Box>
                                    <Button variant="outlined" endIcon={<MessageSquare />}>Chat with Owner</Button>
                                </Box> */}
                            </Box>
                            <Box my={1}>
                                <TicketStats />
                            </Box>
                            <Box my={1}>
                                <TicketInformation />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <TicketActivity />
                </Grid>
            </Grid >
        </>
    )


}