import { Chip, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Typography, Box } from '@mui/material'
import React from 'react'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';

function createData(transaction_hash, time, action, price, from, to) {
    return { transaction_hash, time, action, price, from, to };
}

function truncateTxn(str, length) {
    if (str.length > length) {
        return str.slice(0, length) + '...';
    } else return str;
}

function truncate(str, length) {
    if (str.length > length) {
        return str.slice(0, 8) + '...' + str.slice(-9, -1);
    } else return str;
}

function getActionChip(action) {
    switch (action) {
        case "Sale":
            return <Chip label={action} color='success' />
        case "Transfer":
            return <Chip label={action} color='secondary' />
    }
}

function generateRandomHash() {
    const randomHex = Math.random().toString(16).substr(2, 64); // Generate a random hexadecimal string
    const formattedHash = "0x" + randomHex; // Format as a hash
    return formattedHash;
}

const rows = [
    createData(
        "0xe525FAE3fC6fBB23Af05E54Ff413613A6573CFf2",
        "Thu Apr 01 2023 08:00:00 GMT+0800 (Singapore Standard Time)",
        "Transfer",
        150, // Price as a number
        "0xe525FAE3fC6fBB23Af05E54Ff413613A6573CFf2",
        "0x7890123456789012345678901234567890abcdef"
    ),
    createData(
        "0x7890123456789012345678901234567890abcdef",
        "Fri Apr 09 2023 08:00:00 GMT+0800 (Singapore Standard Time)",
        "Transfer",
        200, // Price as a number
        "0x7890123456789012345678901234567890abcdef",
        "0xabcdef1234567890abcdef1234567890abcdef12"
    ),
    createData(
        "0xFc82416000BA248684A4F7B9fbb56A17dBB72c3E",
        "Wed Mar 25 2023 08:00:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        176,
        "0xFc82416000BA248684A4F7B9fbb56A17dBB72c3E",
        "0xe525FAE3fC6fBB23Af05E54Ff413613A6573CFf2"
    ),

    createData(
        "0xe525FAE3fC6fBB23Af05E54Ff413613A6573CFf2",
        "Thu Apr 01 2023 08:00:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        120,
        "0xe525FAE3fC6fBB23Af05E54Ff413613A6573CFf2",
        "0x7890123456789012345678901234567890abcdef"
    ),

    createData(
        "0xabcdef1234567890abcdef1234567890abcdef12",
        "Fri Apr 09 2023 08:00:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        109,
        "0x7890123456789012345678901234567890abcdef",
        "0xabcdef1234567890abcdef1234567890abcdef12"
    ),

    createData(
        "0x1234567890abcdef1234567890abcdef12345678",
        "Sat May 15 2023 10:30:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        110,
        "0x7890123456789012345678901234567890abcdef",
        "0x1234567890abcdef1234567890abcdef12345678"
    ),

    createData(
        "0x1234567890asdfcdef1234567890abcdef12345678",
        "Sun Jun 20 2023 14:45:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        189,
        "0x1234567890abcdef1234567890abcdef12345678",
        "0x7890123456789012345678901234567890abcdef"
    ),

    createData(
        "0x12342342890abcdef1234567890abcdef12345678",
        "Mon Jul 25 2023 17:15:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        159,
        "0x7890123456789012345678901234567890abcdef",
        "0xabcdef1234567890abcdef1234567890abcdef12"
    ),

    createData(
        "0xasdfagasd890abcdef1234567890abcdef12345678",
        "Tue Aug 30 2023 19:30:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        156,
        "0xabcdef1234567890abcdef1234567890abcdef12",
        "0x7890123456789012345678901234567890abcdef"
    ),

    createData(
        "0x1fasfasf234567890abcdef1234asdvasvef12345678",
        "Wed Sep 05 2023 21:45:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        101,
        "0x7890123456789012345678901234567890abcdef",
        "0x1234567890abcdef1234567890abcdef12345678"
    ),

    createData(
        "0xasdoiwuegncauisfnaosfasfacgthy0abcdef12345678",
        "Thu Oct 10 2023 23:00:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        123,
        "0x1234567890abcdef1234567890abcdef12345678",
        "0x7890123456789012345678901234567890abcdef"
    ),

    createData(
        "0xabcdef1234567890abcdef1234567890abc012345678",
        "Fri Nov 15 2023 01:15:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        183,
        "0x7890123456789012345678901234567890abcdef",
        "0xabcdef1234567890abcdef1234567890abcdef12"
    ),

    createData(
        "fqyawef34fioyaewfsc849573ntd98qw4yr8qtcywtyg48tyc",
        "Sat Dec 20 2023 03:30:00 GMT+0800 (Singapore Standard Time),",
        "Sale",
        100,
        "0xabcdef1234567890abcdef1234567890abcdef12",
        "0x7890123456789012345678901234567890abcdef"
    ),
];

function compareFn(a, b) {
    if (new Date(a.time) > new Date(b.time)) {
        console.log("here")
        return -1;
    } else if (new Date(a.time) < new Date(b.time)) {
        return 1;
    }
    return 0;
}

rows.sort(compareFn)

export default function TicketActivityDataGrid() {
    return (
        <TableContainer component={Paper}>
            <Box marginTop={4} marginLeft={2}>
                <Typography variant='body1'>Total of {rows.length.toString()} records found</Typography>
            </Box>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='left' sx={{ fontWeight: 600 }}>
                            Txn Hash
                        </TableCell>
                        <TableCell align='left' sx={{ fontWeight: 600 }}>
                            Time
                        </TableCell>
                        <TableCell align='left' sx={{ fontWeight: 600 }}>
                            Action
                        </TableCell>
                        <TableCell align='left' sx={{ fontWeight: 600 }}>
                            Price
                        </TableCell>
                        <TableCell align='left' sx={{ fontWeight: 600 }}>
                            From
                        </TableCell>
                        <TableCell />
                        <TableCell align='left' sx={{ fontWeight: 600 }}>
                            To
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.transaction_hash}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{truncateTxn(row.transaction_hash, 10)}</TableCell>
                            <TableCell align="left">{new Date(row.time).toUTCString()}</TableCell>
                            <TableCell align="left">{getActionChip(row.action)}</TableCell>
                            <TableCell align="left">${row.price}</TableCell>
                            <TableCell align="left">{truncate(row.from, 16)}</TableCell>
                            <TableCell align='left'><ArrowCircleRightTwoToneIcon color="success" /></TableCell>
                            <TableCell align="left">{truncate(row.to, 16)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
