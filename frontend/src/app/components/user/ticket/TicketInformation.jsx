import React from 'react'
import { Card, Collapse, Divider } from '@mui/material'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TicketProperties from '@/app/components/user/ticket/TicketProperties'
import TicketDescription from '@/app/components/user/ticket/TicketDescription'
import TicketDetails from '@/app/components/user/ticket/TicketDetails'

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
                <ListItemButton onClick={() => handleClick(0)}>
                    <ListItemIcon>
                        <FormatListBulletedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Details" />
                    {open == 0 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Divider />
                <Collapse in={open == 0} timeout="auto" unmountOnExit>
                    <TicketDetails />
                </Collapse>
                <ListItemButton onClick={() => handleClick(1)}>
                    <ListItemIcon>
                        <ViewInArIcon />
                    </ListItemIcon>
                    <ListItemText primary="Properties" />
                    {open == 1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Divider />
                <Collapse in={open == 1} timeout="auto" unmountOnExit>
                    <TicketProperties />
                </Collapse>
                <ListItemButton onClick={() => handleClick(2)}>
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Description" />
                    {open == 2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Divider />
                <Collapse in={open == 2} timeout="auto" unmountOnExit>
                    <TicketDescription />
                </Collapse>
            </List>
        </Card>
    )
}
