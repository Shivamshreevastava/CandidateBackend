import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(EmployeeName,PersonalEmail,Contact,Previous,Feedback,Submit){
  return {EmployeeName,PersonalEmail,Contact,Previous,Feedback,Submit};
}
const rows = [
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
  createData('Delhi','Ravi Kumar','**********','ABC','XYZ','Yes'),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Employee Name</TableCell>
            <TableCell component="th" align="justify" class="thead">Personal Email</TableCell>
            <TableCell component="th" align="justify" class="thead">Contact No</TableCell>
            <TableCell component="th" align="justify" class="thead">Previous Company</TableCell>
            <TableCell component="th" align="justify" class="thead">Feedback for</TableCell>
            <TableCell component="th" align="justify" class="thead">Submit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.EmployeeName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.EmployeeName}</TableCell>
              <TableCell align="justify">{row.PersonalEmail}</TableCell>
              <TableCell align="justify">{row.Contact}</TableCell>
              <TableCell align="justify">{row.Previous}</TableCell>
              <TableCell align="justify">{row.Feedback}</TableCell>
              <TableCell align="justify">{row.Submit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}