import { HelpOutline } from '@mui/icons-material'
import { Box, Card, Divider, Grid, Paper, Tooltip, Typography } from '@mui/material'
import React from 'react'

export default function TicketStats() {
    return (
        <Card sx={{ padding: 1, width: "100%", alignItems: 'center', '& hr': { mx: 2, }, display: 'inline-flex', justifyContent: 'space-evenly' }} >
            <Grid container display={'inline-flex'}>

                <Grid item xs overflow={'hidden'} textOverflow={'ellipsis'}>
                    <Box display={'inline-flex'}>
                        <Typography variant='body2' color={"#5A5A5A"}>Min Price &#40;24H&#41;</Typography>
                        <Tooltip title="Lowest 24 hour last sale price for NFTs in this token contract"><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginLeft: 1 }} /></Tooltip>
                    </Box>
                    <Typography>$160</Typography>
                </Grid>
                <Divider orientation='vertical' variant='inset' flexItem />
                <Grid item xs overflow={'hidden'} textOverflow={'ellipsis'}>
                    <Box sx={{ width: "100%", display: "flex", flexDirection: 'column' }}>
                        <Box display={'inline-flex'}>
                            <Typography variant='body2' color={"#5A5A5A"} rel="preconnect">Last Sale &#40;Item&#41;</Typography>
                            <Tooltip title="Last sale price for this Ticket"><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginLeft: 1 }} /></Tooltip>
                        </Box>
                        <Typography>$180</Typography>
                    </Box>
                </Grid>
                <Divider orientation='vertical' variant='inset' flexItem />
                <Grid item xs overflow={'hidden'} textOverflow={'ellipsis'}>
                    <Box sx={{ display: "flex", flexDirection: 'column' }}>
                        <Box display={'inline-flex'}>
                            <Typography variant='body2' color={"#5A5A5A"}>Last Sale &#40;Contract&#41;</Typography>
                            <Tooltip title="Last sale price for tickets in this token contract" ><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginLeft: 1 }} /></Tooltip>
                        </Box>
                        <Typography>$160</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Card >
    )
}
