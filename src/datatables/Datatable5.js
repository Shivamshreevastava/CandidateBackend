import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Month,Interview,Hold,Selcted,Rejected,CTCSalary){
  return {Month,Interview,Hold,Selcted,Rejected,CTCSalary};
}

const rows = [
  createData('March',300,250,50,250,50000),
  createData('March',300,250,50,250,50000),
  createData('March',300,250,50,250,50000),
  createData('March',300,250,50,250,50000),
  createData('March',300,250,50,250,50000),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Month</TableCell>
            <TableCell component="th" align="justify" class="thead">Interview</TableCell>
            <TableCell component="th" align="justify" class="thead">Hold</TableCell>
            <TableCell component="th" align="justify" class="thead">Selcted</TableCell>
            <TableCell component="th" align="justify" class="thead">Rejected</TableCell>
            <TableCell component="th" align="justify" class="thead">CTC Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Month}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.Month}</TableCell>
              <TableCell align="justify">{row.Interview}</TableCell>
              <TableCell align="justify">{row.Hold}</TableCell>
              <TableCell align="justify">{row.Selcted}</TableCell>
              <TableCell align="justify">{row.Rejected}</TableCell>
              <TableCell align="justify">{row.CTCSalary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}