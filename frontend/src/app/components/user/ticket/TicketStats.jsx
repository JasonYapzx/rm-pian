import { HelpOutline } from '@mui/icons-material'
import { Box, Card, Divider, Grid, Paper, Tooltip, Typography } from '@mui/material'
import React from 'react'

export default function TicketStats() {
    return (
        <Card sx={{ padding: 1, width: "100%", alignItems: 'center', '& hr': { mx: 2, }, display: 'inline-flex', justifyContent: 'space-evenly' }} >
            <Box overflow={'hidden'} textOverflow={'ellipsis'}>
                <Box display={'inline-flex'}>
                    <Typography variant='body2' color={"#9f9f9f"}>Min Price &#40;24H&#41;</Typography>
                    <Tooltip title="Lowest 24 hour last sale price for NFTs in this token contract"><HelpOutline fontSize='small' sx={{ color: "#9f9f9f" }} /></Tooltip>
                </Box>
                <Typography>$160</Typography>
            </Box>
            <Divider orientation='vertical' variant='inset' flexItem />
            <Box overflow={'hidden'} textOverflow={'ellipsis'}>
                <Paper sx={{ display: "flex", flexDirection: 'column' }}>
                    <Box display={'inline-flex'}>
                        <Typography variant='body2' color={"#9f9f9f"} rel="preconnect">Last Sale &#40;Item&#41;</Typography>
                        <Tooltip title="Lowest 24 hour last sale price for NFTs in this token contract"><HelpOutline fontSize='small' sx={{ color: "#9f9f9f" }} /></Tooltip>
                    </Box>
                    <Typography>$180</Typography>
                </Paper>
            </Box>
            <Divider orientation='vertical' variant='inset' flexItem />
            <Box overflow={'hidden'} textOverflow={'ellipsis'}>
                <Paper sx={{ display: "flex", flexDirection: 'column' }}>
                    <Box display={'inline-flex'}>
                        <Typography variant='body2' color={"#9f9f9f"}>Min Price &#40;24H&#41;</Typography>
                        <Tooltip title="Lowest 24 hour last sale price for NFTs in this token contract"><HelpOutline fontSize='small' sx={{ color: "#9f9f9f" }} /></Tooltip>
                    </Box>
                    <Typography>$160</Typography>
                </Paper>
            </Box>
        </Card>
    )
}