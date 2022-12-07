import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Name,Applied,Hiring,Reffered,Status,Interview,Timing,DOJ,Monthly,Payment,Payment_Date){
  return {Name,Applied,Hiring,Reffered,Status,Interview,Timing,DOJ,Monthly,Payment,Payment_Date};
}

const rows = [
  createData('Kriti','Frontend Developer','ABC Pvt Lmt','Employee','Pending','05-03-2022','11:00am','-','10 LPA','Pending','04-03-2022'),
  createData('Kriti','Frontend Developer','ABC Pvt Lmt','Employee','Pending','05-03-2022','11:00am','-','10 LPA','Pending','04-03-2022'),
  createData('Kriti','Frontend Developer','ABC Pvt Lmt','Employee','Pending','05-03-2022','11:00am','-','10 LPA','Pending','04-03-2022'),
  createData('Kriti','Frontend Developer','ABC Pvt Lmt','Employee','Pending','05-03-2022','11:00am','-','10 LPA','Pending','04-03-2022'),
  createData('Kriti','Frontend Developer','ABC Pvt Lmt','Employee','Pending','05-03-2022','11:00am','-','10 LPA','Pending','04-03-2022'),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Name</TableCell>
            <TableCell component="th" align="justify" class="thead">Applied for</TableCell>
            <TableCell component="th" align="justify" class="thead">Hiring for Company</TableCell>
            <TableCell component="th" align="justify" class="thead">Reffered by</TableCell>
            <TableCell component="th" align="justify" class="thead">Status</TableCell>
            <TableCell component="th" align="justify" class="thead">Interview Date</TableCell>
            <TableCell component="th" align="justify" class="thead">Timing</TableCell>
            <TableCell component="th" align="justify" class="thead">DOJ</TableCell>
            <TableCell component="th" align="justify" class="thead">Monthly CTC</TableCell>
            <TableCell component="th" align="justify" class="thead">Payment</TableCell>
            <TableCell component="th" align="justify" class="thead">Payment Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.Name}</TableCell>
              <TableCell align="justify">{row.Applied}</TableCell>
              <TableCell align="justify">{row.Hiring}</TableCell>
              <TableCell align="justify">{row.Reffered}</TableCell>
              <TableCell align="justify">{row.Status}</TableCell>
              <TableCell align="justify">{row.Interview}</TableCell>
              <TableCell align="justify">{row.Timing}</TableCell>
              <TableCell align="justify">{row.DOJ}</TableCell>
              <TableCell align="justify">{row.Monthly}</TableCell>
              <TableCell align="justify">{row.Payment}</TableCell>
              <TableCell align="justify">{row.Payment_Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}