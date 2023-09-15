import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import bandIcon from '../../../public/The1975cover.jpg'

function createData(icon, txnHash, method, age, from, to, item) {
  return { icon, txnHash, method, age, from, to, item };
}

const rows = [
  createData(bandIcon, '0x41f0b9e99bd0c2a63...', 'Pay Back Loan', '3 mins ago', '	0x8252Df...03152BC8', '0x902596...b861dDdB', '#5'),
  createData(bandIcon, '0x41f0b9e99bd0c2a63...', 'Pay Back Loan', '3 mins ago', '	0x8252Df...03152BC8', '0x902596...b861dDdB', '#4'),
  createData(bandIcon, '0x41f0b9e99bd0c2a63...', 'Pay Back Loan', '3 mins ago', '	0x8252Df...03152BC8', '0x902596...b861dDdB', '#3'),
  createData(bandIcon, '0x41f0b9e99bd0c2a63...', 'Pay Back Loan', '3 mins ago', '	0x8252Df...03152BC8', '0x902596...b861dDdB', '#2'),
  createData(bandIcon, '0x41f0b9e99bd0c2a63...', 'Pay Back Loan', '3 mins ago', '	0x8252Df...03152BC8', '0x902596...b861dDdB', '#1'),
];

export default function BasicTable() {

  const ImageTableCell = () => (
    <TableCell>
      <img src='/The1975cover.jpg' alt="Image" className='rounded-full h-10 w-10'/>
    </TableCell>
  );

  return (
    <div>
      <div className='flex flex-row p-4 gap-2'>
        <FilterListIcon />
        <div className='text-sm'>1,631 transactions found</div>
        <button className='ml-auto border border-gray-300 hover:bg-gray-300 rounded-md py-1 px-2'>
          <FilterAltIcon />
          Advanced Filter
        </button>
        <button className='bg-gray-200 text-gray-500 rounded-md py-1 px-2 text-xs w-fit'>First</button>
        <button><ArrowBackIosIcon className='flex justify-center items-center border border-gray-300 rounded-md py-1 px-2 text-gray-500 bg-gray-200 w-8 h-8' /></button>
        <div className='flex justify-center items-center border border-gray-300 rounded-md py-1 px-2 text-gray-500 bg-gray-200 text-xs'>Page 1 of 66</div>
        <button><ArrowForwardIosIcon className='flex justify-center items-center border border-gray-300 rounded-md py-1 px-2 text-blue-500 w-8 h-8  hover:bg-gray-300' /></button>
        <button className='flex justify-center items-center border border-gray-300 rounded-md py-1 px-2 text-blue-500 text-xs hover:bg-gray-300'>Last</button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='border border-gray-200 rounded-xl'>
          <TableHead>
            <TableCell>
              <HelpOutlineIcon className='text-gray-500 h-5 w-5' />
            </TableCell>
            <TableCell align="left" className='text-xs font-semibold'>Txn Hash
            </TableCell>
            <TableCell align="left" className='text-xs font-semibold'>Method
              <HelpOutlineIcon className='text-gray-500 h-5 w-5' />
            </TableCell>
            <TableCell align="left" className='text-xs font-semibold'>Age</TableCell>
            <TableCell align="left" className='text-xs font-semibold'>From</TableCell>
            <TableCell align="left" className='text-xs font-semibold'>To</TableCell>
            <TableCell align="left" className='text-xs font-semibold'>Item</TableCell>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.icon}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <ImageTableCell component="th" scope="row">
                  {row.icon}
                </ImageTableCell>
                <TableCell align="right">{row.txnHash}</TableCell>
                <TableCell align="right">{row.method}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.from}</TableCell>
                <TableCell align="right">{row.to}</TableCell>
                <TableCell align="right">{row.item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}