'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import ResponsiveAppBar from '@/app/components/header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import Avatar from '@mui/material/Avatar';
import the1975 from '../../../../public/the1975.jpeg';
import ts from '../../../../public/ts.jpeg';
import twice from '../../../../public/twice.jpeg';
import lauv from '../../../../public/lauv.jpeg';
import anson from '../../../../public/anson.jpeg';
import sam from '../../../../public/sam.jpeg';

import Image from 'next/image';

const CollectionsPage = () => {
  const buttons = [
    <Button
      key='one'
      style={{
        color: '#878787',
        textTransform: 'none',
        border: '1px solid lightgrey',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
      }}
    >
      1h
    </Button>,
    <Button
      key='two'
      variant='text'
      style={{
        color: '#878787',
        textTransform: 'none',
        border: '1px solid lightgrey',
      }}
    >
      6h
    </Button>,
    <Button
      key='three'
      variant='text'
      style={{
        color: '#878787',
        textTransform: 'none',
        border: '1px solid lightgrey',
      }}
    >
      12h
    </Button>,
    <Button
      key='four'
      variant='text'
      style={{
        color: '#878787',
        textTransform: 'none',
        border: '1px solid lightgrey',
      }}
    >
      1d
    </Button>,
    <Button
      key='five'
      variant='text'
      style={{
        color: '#878787',
        textTransform: 'none',
        border: '1px solid lightgrey',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
      }}
    >
      7d
    </Button>,
  ];

  const avatarPaths = [the1975, ts, twice, lauv, anson, sam];

  function createData(
    name,
    change,
    minPrice,
    maxPrice,
    sales,
    owners,
    totalAssets,
    avatar
  ) {
    return {
      name,
      change,
      minPrice,
      maxPrice,
      sales,
      owners,
      totalAssets,
      avatar,
    };
  }

  const rows = [
    createData(
      'The 1975: At Their Very Best Tour in Singapore',
      0.66,
      140,
      700,
      50,
      6999,
      10000,
      avatarPaths[0]
    ),
    createData('Taylor Swift: The Eras Tour', -1.69,
    280,
    1000,
    218,
    8720,
    20000, avatarPaths[1]),
    createData('TWICE 5TH World Tour', 0.96,
    320,
    940,
    103,
    13060,
    14000, avatarPaths[2]),

    createData('Lauv: The Between Albums Tour', 2.83,
    100,
    600,
    92,
    4432,
    8000, avatarPaths[3]),
    createData('Anson Seabra: The Neverland Tour in Singapore', -9.93,
    115,
    400,
    28,
    830,
    4610, avatarPaths[4]),

    createData('Sam Smith: GLORIA the tour', -2.37,
    218,
    933,
    17,
    2312,
    9290, avatarPaths[5]),
    createData(
      'The 1975: At Their Very Best Tour in Singapore',
      1.66,
      140,
      700,
      50,
      6999,
      10000,
      avatarPaths[0]
    ),
    createData('Lauv: The Between Albums Tour', 2.83,
    140,
    700,
    50,
    6999,
    10000, avatarPaths[3]),
    createData('Anson Seabra: The Neverland Tour in Singapore', 16.90,
    140,
    700,
    50,
    6999,
    10000, avatarPaths[4]),
    createData('Taylor Swift: The Eras Tour', -0.69,
    140,
    700,
    50,
    6999,
    10000, avatarPaths[1]),
  ];

  // const router = useRouter();
  const handleClick = (name) => {
    console.log(name);
    // router.push(`/user/ticket/${name}`);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#ffffff' }}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={{ my: 3, mx: 5 }}>
        <Typography
          gutterBottom
          sx={{
            py: 2,
            px: 2,
            letterSpacing: '.1rem',
            fontWeight: 400,
            color: 'ffffff',
            textDecoration: 'none',

            fontSize: 40,
          }}
        >
          Top Collections
        </Typography>
        <Divider variant='middle' />
        <ButtonGroup
          variant='outlined'
          size='small'
          aria-label='button group'
          style={{ display: 'flex', marginTop: 20, marginBottom: 20, justifyContent: 'flex-end' }}
        >
          {buttons}
        </ButtonGroup>

        <TableContainer component={Paper}>
          <Table sx={{}} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: 300,
                    color: '#878787',
                    fontStyle: 'italic',
                  }}
                >
                  #
                </TableCell>
                <TableCell align='left' sx={{ fontWeight: 600 }}>
                  Collection&nbsp;(%)
                </TableCell>
                <TableCell align='left' sx={{ fontWeight: 600 }}>
                  Change&nbsp;(%)
                </TableCell>
                <TableCell align='left' sx={{ fontWeight: 600 }}>
                  Min Price&nbsp;(24h)
                </TableCell>
                <TableCell align='left' sx={{ fontWeight: 600 }}>
                  Max Price&nbsp;(24h)
                </TableCell>
                <TableCell align='left' sx={{ fontWeight: 600 }}>
                  Sales
                </TableCell>
                <TableCell align='left' sx={{ fontWeight: 600 }}>
                  Owners
                </TableCell>
                <TableCell align='left' sx={{ fontWeight: 600 }}>
                  Total Assets
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow
                    key={row.name}
                    hover
                    onClick={() => handleClick(row.name)}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      cursor: 'pointer',
                      height: '70px',
                    }}
                  >
                    <TableCell
                      component='th'
                      scope='row'
                      sx={{ fontWeight: 400, color: '#878787' }}
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell align='left'>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt={row.name} style={{ marginRight: '8px' }}>
                          <Image
                            src={row.avatar}
                            alt='My Avatar'
                            width={100}
                            height={100}
                          />
                        </Avatar>
                        {row.name}
                        {console.log('hi' + row.avatar)}
                      </div>
                    </TableCell>
                    <TableCell
                      align='left'
                      style={{ color: row.change < 0 ? 'red' : 'green' }}
                    >
                      {row.change}
                    </TableCell>
                    <TableCell align='left'>{row.minPrice}</TableCell>
                    <TableCell align='left'>{row.maxPrice}</TableCell>
                    <TableCell align='left'>{row.sales}</TableCell>
                    <TableCell align='left'>{row.owners}</TableCell>
                    <TableCell align='left'>{row.totalAssets}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default CollectionsPage;
