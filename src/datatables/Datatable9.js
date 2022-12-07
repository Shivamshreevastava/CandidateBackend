import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Employee,Current,Past){
  return {Employee,Current,Past};
}
const rows = [
  createData('Emp ID','Et0909','Correct'),
  createData('Emp ID','Et0909','Correct'),
  createData('Emp ID','Et0909','Correct'),
  createData('Emp ID','Et0909','Correct'),
  createData('Emp ID','Et0909','Correct'),
  createData('Emp ID','Et0909','Correct'),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Employee Detail</TableCell>
            <TableCell component="th" align="justify" class="thead">Current Company details</TableCell>
            <TableCell component="th" align="justify" class="thead">Past Company HR Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Employee}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.Employee}</TableCell>
              <TableCell align="justify">{row.Current}</TableCell>
              <TableCell align="justify">{row.Past}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}