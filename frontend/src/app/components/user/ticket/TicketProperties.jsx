import React from 'react'
import { Grid, IconButton, Tooltip, Typography } from '@mui/material'
import { CopyAllOutlined, HelpOutline } from '@mui/icons-material'
import Link from 'next/link'
import { Copy } from 'react-feather'

export default function TicketProperties() {
    return (
        <Grid container spacing={3} p={4}>
            <Grid item xs={12} container>
                <Grid item xs={4} display={'inline-flex'}>
                    <Tooltip title="Current owner of this ticket" ><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginRight: 1 }} /></Tooltip>
                    <Typography variant='body1' color={"#5A5A5A"} rel="preconnect">Owner:</Typography>
                </Grid>
                <Grid item xs={8} display={'inline-flex'}>
                    <Link href={"/user/ticket"} style={{ color: '#056aa8' }}>
                        0xFc82416000BA248684A4F7B9fbb56A17dBB72c3E
                    </Link>
                    <Tooltip title="Copy Address">
                        <IconButton sx={{ paddingX: 1, paddingY: 0 }}>
                            <Copy size={18} sx={{ marginLeft: 1 }} onClick={() => navigator.clipboard.writeText("0xFc82416000BA248684A4F7B9fbb56A17dBB72c3E")} />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={4} display={'inline-flex'}>
                    <Tooltip title="Last sale price for this Ticket" ><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginRight: 1 }} /></Tooltip>
                    <Typography variant='body1' color={"#5A5A5A"} rel="preconnect">Contract Address:</Typography>
                </Grid>
                <Grid item xs={8} display={'inline-flex'}>
                    <Link href={"/user/ticket"} style={{ color: '#056aa8' }}>
                        0x81Ae0bE3A8044772D04F32398bac1E1B4B215aa8
                    </Link>
                    <Tooltip title="Copy Address">
                        <IconButton sx={{ paddingX: 1, paddingY: 0 }}>
                            <Copy size={18} sx={{ marginLeft: 1 }} onClick={() => navigator.clipboard.writeText("0x81Ae0bE3A8044772D04F32398bac1E1B4B215aa8")} />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={4} display={'inline-flex'}>
                    <Tooltip title="Last sale price for this Ticket" ><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginRight: 1 }} /></Tooltip>
                    <Typography variant='body1' color={"#5A5A5A"} rel="preconnect">Creator:</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Link href={"/user/ticket"} style={{ color: '#056aa8' }}>
                        Live Nation Singapore Concerts Pte. Ltd.
                    </Link>
                </Grid>
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={4} display={'inline-flex'}>
                    <Tooltip title="Last sale price for this Ticket" ><HelpOutline fontSize='small' sx={{ color: "#5A5A5A", marginRight: 1 }} /></Tooltip>
                    <Typography variant='body1' color={"#5A5A5A"} rel="preconnect">Token ID:</Typography>
                </Grid>
                <Grid item xs={8}>
                    165
                </Grid>
            </Grid>

        </Grid >
    )
}
