"use client"

import React from 'react'
import TicketArt from '../../components/user/ticket/TicketArt'
import TicketStats from '../../components/user/ticket/TicketStats'
import TicketDetails from '../../components/user/ticket/TicketNftDetails'
import TicketActivity from '../../components/user/ticket/TicketActivity'
import Header from '../../components/header'
import { Box, Button, Card, CardContent, Collapse, Divider, Grid, Typography } from '@mui/material'
import { MessageSquare } from 'react-feather'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { ListAlt } from '@mui/icons-material';
import TicketProperties from '@/app/components/user/ticket/TicketProperties'
import TicketDescription from '@/app/components/user/ticket/TicketEventDetails'
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
                                <Typography variant='h5' fontFamily={'sans-serif'}>Coldplay Music Of The Spheres #165</Typography>
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