import React from 'react'
import { Card, Collapse, Divider } from '@mui/material'
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

export default function TicketInformation() {
    const [open, setOpen] = React.useState(-1);

    const handleClick = (index) => {
        if (index === open) {
            setOpen(-1)
        }
        else {
            setOpen(index);
        }
    };
    return (
        <Card>
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                disablePadding
            >
                <ListItemButton onClick={() => handleClick(2)}>
                    <ListItemIcon>
                        <Event />
                    </ListItemIcon>
                    <ListItemText primary="Event Details" />
                    {open == 2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Divider />
                <Collapse in={open == 2} timeout="auto" unmountOnExit>
                    <TicketEventDetails />
                </Collapse>
                <ListItemButton onClick={() => handleClick(0)}>
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="NFT Details" />
                    {open == 0 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Divider />
                <Collapse in={open == 0} timeout="auto" unmountOnExit>
                    <TicketNftDetails />
                </Collapse>
            </List>
        </Card>
    )
}
