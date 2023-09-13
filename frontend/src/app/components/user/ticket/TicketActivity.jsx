import React from 'react'
import { Card, Collapse, Divider, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TicketEventDetails from '@/app/components/user/ticket/TicketEventDetails'
import TicketNftDetails from '@/app/components/user/ticket/TicketNftDetails'
import { Event } from '@mui/icons-material';

export default function TicketActivity() {
    return (
        <Card >
            <Typography variant='h6' fontWeight={'bold'} sx={{ padding: 2 }}>Ticket Activity</Typography>
            <Divider />
            <TicketEventDetails />
        </Card>
    )
}
