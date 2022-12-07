import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Candidate,Designation,Hired,DOJ,Days,View){
  return {Candidate,Designation,Hired,DOJ,Days,View};
}
const rows = [
  createData('Shivam','Frontend Developer','ABC Pvt Ltd','03-03-2022',60,'**********'),
  createData('Shivam','Frontend Developer','ABC Pvt Ltd','03-03-2022',60,'**********'),
  createData('Shivam','Frontend Developer','ABC Pvt Ltd','03-03-2022',60,'**********'),
  createData('Shivam','Frontend Developer','ABC Pvt Ltd','03-03-2022',60,'**********'),
  createData('Shivam','Frontend Developer','ABC Pvt Ltd','03-03-2022',60,'**********'),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Candidate</TableCell>
            <TableCell component="th" align="justify" class="thead">Designation</TableCell>
            <TableCell component="th" align="justify" class="thead">Hired by</TableCell>
            <TableCell component="th" align="justify" class="thead">DOJ</TableCell>
            <TableCell component="th" align="justify" class="thead">Days</TableCell>
            <TableCell component="th" align="justify" class="thead">View Contact No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Candidate}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.Candidate}</TableCell>
              <TableCell align="justify">{row.Designation}</TableCell>
              <TableCell align="justify">{row.Hired}</TableCell>
              <TableCell align="justify">{row.DOJ}</TableCell>
              <TableCell align="justify">{row.Days}</TableCell>
              <TableCell align="justify">{row.View}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}