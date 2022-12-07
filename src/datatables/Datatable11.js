import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(openingBalance,mailer,sms,contactView,jobposting,inquiry,Verification,tracking){
  return {openingBalance,mailer,sms,contactView,jobposting,inquiry,Verification,tracking};
}
const rows = [
  createData(2000,500,500,100,100,100,100,100),
  createData(2000,500,500,100,100,100,100,100),
  createData(2000,500,500,100,100,100,100,100),
  createData(2000,500,500,100,100,100,100,100),
  createData(2000,500,500,100,100,100,100,100),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Opening Balance</TableCell>
            <TableCell component="th" align="justify" class="thead">Mailer</TableCell>
            <TableCell component="th" align="justify" class="thead">SMS</TableCell>
            <TableCell component="th" align="justify" class="thead">Contact View</TableCell>
            <TableCell component="th" align="justify" class="thead">Job Posting</TableCell>
            <TableCell component="th" align="justify" class="thead">Inquiry Recieved</TableCell>
            <TableCell component="th" align="justify" class="thead">Emp. Verification</TableCell>
            <TableCell component="th" align="justify" class="thead">Candidate Tracking</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.AutoMail}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.openingBalance}</TableCell>
              <TableCell align="justify">{row.mailer}</TableCell>
              <TableCell component="th" scope="row" align="justify">{row.sms}</TableCell>
              <TableCell align="justify">{row.contactView}</TableCell>
              <TableCell component="th" scope="row" align="justify">{row.jobposting}</TableCell>
              <TableCell align="justify">{row.inquiry}</TableCell>
              <TableCell component="th" scope="row" align="justify">{row.Verification}</TableCell>
              <TableCell align="justify">{row.tracking}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}