import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(State,Contact,ContactNo){
  return {State,Contact,ContactNo};
}
const rows = [
  createData('Delhi','Ravi Kumar','**********'),
  createData('Delhi','Ravi Kumar','**********'),
  createData('Delhi','Ravi Kumar','**********'),
  createData('Delhi','Ravi Kumar','**********'),
  createData('Delhi','Ravi Kumar','**********'),
  createData('Delhi','Ravi Kumar','**********'),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">State</TableCell>
            <TableCell component="th" align="justify" class="thead">Contact Person</TableCell>
            <TableCell component="th" align="justify" class="thead">ContactNo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.State}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.State}</TableCell>
              <TableCell align="justify">{row.Contact}</TableCell>
              <TableCell align="justify">{row.ContactNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}