import { Box, Card } from '@mui/material'
import React from 'react'

export default function TicketArt() {
    return (
        <Box

            sx={{
                objectFit: "contain",
                aspectRatio: 1,
                width: "100%",
                borderRadius: "10px",
                display: "grid",
                alignItems: "center",
                background: "linear-gradient(75deg,#f70a47,#f803bb,yellow,#f76e0a,#0af747,#0af7d3);",
                boxShadow: 3,
                padding: 3,
                justifyContent: "center"
            }}
        >
            <Box
                component="img"
                src="https://www.snapdragonstadium.com/assets/img/Static_Digital-MainEventPage_1440x500_Coldplay_2023_Regional_SnapdragonStadium_0227_HER_070Shake_NEWSHOWADDED-f830d8441d.jpg"
            />
        </ Box>
    )
}
