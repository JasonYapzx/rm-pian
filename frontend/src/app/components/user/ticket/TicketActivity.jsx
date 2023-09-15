import React from 'react'
import { Card, Divider, Typography } from '@mui/material'
import TicketActivityDataGrid from '@/app/components/user/ticket/TicketActivityDataGrid'

export default function TicketActivity() {
    return (
        <Card >
            <Typography fontWeight={'bold'} sx={{ padding: 2 }}>Ticket Activity</Typography>
            <Divider />
            <TicketActivityDataGrid />
        </Card>
    )
}
