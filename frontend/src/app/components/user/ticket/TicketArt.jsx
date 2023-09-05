import { Box, Card } from '@mui/material'
import React from 'react'

export default function TicketArt() {
    return (
        <Card sx={{ borderRadius: "10px", padding: "10px", width: "100%" }} alignItems="center">
            <Box
                component="img"
                src="https://www.snapdragonstadium.com/assets/img/Static_Digital-MainEventPage_1440x500_Coldplay_2023_Regional_SnapdragonStadium_0227_HER_070Shake_NEWSHOWADDED-f830d8441d.jpg"
                sx={{
                    objectFit: "contain",
                    aspectRatio: 1,
                    width: "100%",
                    borderRadius: "10px",
                    alignItems: "center",
                    background: "linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%)",
                    boxShadow: 3,
                    padding: 3,
                }}
            >
            </ Box>
        </Card>
    )
}
