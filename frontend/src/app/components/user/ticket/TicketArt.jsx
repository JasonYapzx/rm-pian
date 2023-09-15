import { Box } from '@mui/material'
import React from 'react'
import coldplay from '../../../../../public/coldplay.jpeg'
import Image from 'next/image'

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
            <Box>
                <Image
                    src={coldplay}
                    alt='Coldplay Ticket'
                />
            </Box>
        </ Box>
    )
}
