import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Month,Associate_Recruiters,Total_application,Interview,Hold,Rejected,Selected,Total_CTC,Closed_Job,Open_Job){
  return {Month,Associate_Recruiters,Total_application,Interview,Hold,Rejected,Selected,Total_CTC,Closed_Job,Open_Job };
}

const rows = [
  createData('January','Kirtika',35,31,3,20,11,33,20,80),
  createData('January','Kirtika',35,31,3,20,11,33,20,80),
  createData('January','Kirtika',35,31,3,20,11,33,20,80),
  createData('January','Kirtika',35,31,3,20,11,33,20,80),
  createData('January','Kirtika',35,31,3,20,11,33,20,80),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Month</TableCell>
            <TableCell component="th" align="justify" class="thead">Associate_Recruiters</TableCell>
            <TableCell component="th" align="justify" class="thead">Total_application</TableCell>
            <TableCell component="th" align="justify" class="thead">Interview</TableCell>
            <TableCell component="th" align="justify" class="thead">Hold</TableCell>
            <TableCell component="th" align="justify" class="thead">Selected</TableCell>
            <TableCell component="th" align="justify" class="thead">Total_CTC</TableCell>
            <TableCell component="th" align="justify" class="thead">Closed_Job</TableCell>
            <TableCell component="th" align="justify" class="thead">Open_Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.Month}</TableCell>
              <TableCell align="justify">{row.Associate_Recruiters}</TableCell>
              <TableCell align="justify">{row.Total_application}</TableCell>
              <TableCell align="justify">{row.Interview}</TableCell>
              <TableCell align="justify">{row.Hold}</TableCell>
              <TableCell align="justify">{row.Selected}</TableCell>
              <TableCell align="justify">{row.Total_CTC}</TableCell>
              <TableCell align="justify">{row.Closed_Job}</TableCell>
              <TableCell align="justify">{row.Open_Job}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}