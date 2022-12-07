import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Name,Designation,Department,Total,Expected,Notice,Highest,Industry,State,Pin,Mobile,Email,Monthly){
  return {Name,Designation,Department,Total,Expected,Notice,Highest,Industry,State,Pin,Mobile,Email,Monthly};
}

const rows = [
  createData('Kriti','Frontend Developer','Technical','2 Years','-','2 months','MCA','IT','Delhi',110040,9876543210,'kruti@gmail.com','25,000/-'),
  createData('Kriti','Frontend Developer','Technical','2 Years','-','2 months','MCA','IT','Delhi',110040,9876543210,'kruti@gmail.com','25,000/-'),
  createData('Kriti','Frontend Developer','Technical','2 Years','-','2 months','MCA','IT','Delhi',110040,9876543210,'kruti@gmail.com','25,000/-'),
  createData('Kriti','Frontend Developer','Technical','2 Years','-','2 months','MCA','IT','Delhi',110040,9876543210,'kruti@gmail.com','25,000/-'),
  createData('Kriti','Frontend Developer','Technical','2 Years','-','2 months','MCA','IT','Delhi',110040,9876543210,'kruti@gmail.com','25,000/-'),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Name</TableCell>
            <TableCell component="th" align="justify" class="thead">Designation</TableCell>
            <TableCell component="th" align="justify" class="thead">Department</TableCell>
            <TableCell component="th" align="justify" class="thead">Total Experience</TableCell>
            <TableCell component="th" align="justify" class="thead">Expected Salary</TableCell>
            <TableCell component="th" align="justify" class="thead">Notice Period</TableCell>
            <TableCell component="th" align="justify" class="thead">Highest Education*</TableCell>
            <TableCell component="th" align="justify" class="thead">Industry</TableCell>
            <TableCell component="th" align="justify" class="thead">State*</TableCell>
            <TableCell component="th" align="justify" class="thead">Pin Code</TableCell>
            <TableCell component="th" align="justify" class="thead">Mob No*</TableCell>
            <TableCell component="th" align="justify" class="thead">Email ID*</TableCell>
            <TableCell component="th" align="justify" class="thead">Monthly Salary*</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.Name}</TableCell>
              <TableCell align="justify">{row.Designation}</TableCell>
              <TableCell align="justify">{row.Department}</TableCell>
              <TableCell align="justify">{row.Total}</TableCell>
              <TableCell align="justify">{row.Expected}</TableCell>
              <TableCell align="justify">{row.Notice}</TableCell>
              <TableCell align="justify">{row.Highest}</TableCell>
              <TableCell align="justify">{row.Industry}</TableCell>
              <TableCell align="justify">{row.State}</TableCell>
              <TableCell align="justify">{row.Pin}</TableCell>
              <TableCell align="justify">{row.Mobile}</TableCell>
              <TableCell align="justify">{row.Email}</TableCell>
              <TableCell align="justify">{row.Monthly}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}