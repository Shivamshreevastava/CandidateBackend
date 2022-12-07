import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Date,Designation,Company_Name,Applied,Interview,Hold,Rejected,Selected,Assigned,Auto,Paid_Response,Share_Job_posting_link_on_social_media_site,Bulk_Email,Job_Posting){
            return {Date,Designation,Company_Name,Applied,Interview,Hold,Rejected,Selected,Assigned,Auto,Paid_Response,Share_Job_posting_link_on_social_media_site,Bulk_Email,Job_Posting};
}

const rows = [
  createData('03/03/2022','Frontend Developer','ABC Pvt Lmt',50,20,1,18,1,'shyam.cogent@abc.com','Yes/No','Yes/No','www.facebook.com','Upload excel','Closed/Deleted'),
  createData('03/03/2022','Frontend Developer','ABC Pvt Lmt',50,20,1,18,1,'shyam.cogent@abc.com','Yes/No','Yes/No','www.facebook.com','Upload excel','Closed/Deleted'),
  createData('03/03/2022','Frontend Developer','ABC Pvt Lmt',50,20,1,18,1,'shyam.cogent@abc.com','Yes/No','Yes/No','www.facebook.com','Upload excel','Closed/Deleted'),
  createData('03/03/2022','Frontend Developer','ABC Pvt Lmt',50,20,1,18,1,'shyam.cogent@abc.com','Yes/No','Yes/No','www.facebook.com','Upload excel','Closed/Deleted'),
  createData('03/03/2022','Frontend Developer','ABC Pvt Lmt',50,20,1,18,1,'shyam.cogent@abc.com','Yes/No','Yes/No','www.facebook.com','Upload excel','Closed/Deleted'),
];

export default function Datatable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Date</TableCell>
            <TableCell component="th" align="justify" class="thead">Designation</TableCell>
            <TableCell component="th" align="justify" class="thead">Company_Name</TableCell>
            <TableCell component="th" align="justify" class="thead">Applied</TableCell>
            <TableCell component="th" align="justify" class="thead">Interview</TableCell>
            <TableCell component="th" align="justify" class="thead">Hold</TableCell>
            <TableCell component="th" align="justify" class="thead">Rejected</TableCell>
            <TableCell component="th" align="justify" class="thead">Selected</TableCell>
            <TableCell component="th" align="justify" class="thead">Assigned to other Recruiter</TableCell>
            <TableCell component="th" align="justify" class="thead">Auto Job Alert by Email/sms/Whatsapp</TableCell>
            <TableCell component="th" align="justify" class="thead">Paid Response</TableCell>
            <TableCell component="th" align="justify" class="thead">Share Job posting link on social media site</TableCell>
            <TableCell component="th" align="justify" class="thead">Bulk Email/ SMS/ Whatsapp</TableCell>
            <TableCell component="th" align="justify" class="thead">Job Posting</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="justify">{row.Date}</TableCell>
              <TableCell align="justify">{row.Designation}</TableCell>
              <TableCell align="justify">{row.Company_Name}</TableCell>
              <TableCell align="justify">{row.Applied}</TableCell>
              <TableCell align="justify">{row.Interview}</TableCell>
              <TableCell align="justify">{row.Hold}</TableCell>
              <TableCell align="justify">{row.Rejected}</TableCell>
              <TableCell align="justify">{row.Selected}</TableCell>
              <TableCell align="justify">{row.Assigned}</TableCell>
              <TableCell align="justify">{row.Auto}</TableCell>
              <TableCell align="justify">{row.Paid_Response}</TableCell>
              <TableCell align="justify">{row.Share_Job_posting_link_on_social_media_site}</TableCell>
              <TableCell align="justify">{row.Bulk_Email}</TableCell>
              <TableCell align="justify">{row.Job_Posting}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}