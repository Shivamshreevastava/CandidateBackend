import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Uploadinvoice,set,email){
  return {Uploadinvoice,set,email};
}
const rows = [
  createData('','Onetime/no of date','syam.cogent@gmail.com'),
  createData('','Onetime/no of date','syam.cogent@gmail.com'),
  createData('','Onetime/no of date','syam.cogent@gmail.com'),
  createData('','Onetime/no of date','syam.cogent@gmail.com'),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Upload invoice</TableCell>
            <TableCell component="th" align="justify" class="thead">Set Auto Reminder</TableCell>
            <TableCell component="th" align="justify" class="thead">Employer Email ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Uploadinvoice}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.Uploadinvoice}</TableCell>
             
              <TableCell component="th" scope="row" align="justify">{row.set}</TableCell>
              
              <TableCell component="th" scope="row" align="justify">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}