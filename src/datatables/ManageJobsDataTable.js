import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Datatable() {
  const [data, setData] = useState([]);
  const id = localStorage.getItem("auth_token");
  console.log(id);
  const fetchData = async () => {
    await axios.get("/candidateshowjobs/view").then((res) => {
      console.log(res.data);
      setData(res.data);
      //console.log(res.data.result);
    });
  };
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table-responsive">
      {/* <a href="Candidate_manage_job  "><button type="button" class="btn btn-primary">Apply</button></a>*/}
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Designation</th>
              <th scope="col">Department</th>
              <th scope="col">Company</th>
              <th scope="col">Total Experience</th>
              <th scope="col">Expected Salary</th>
              <th scope="col">Notice Period</th>
              <th scope="col">Qualification</th>
              <th scope="col">Industry</th>
              <th scope="col">Location</th>
              <th scope="col">State</th>
              <th scope="col">Role & Responsibities</th>
              <th scope="col">Status</th>
              <th scope="col">Reason</th>
              <th scope="col">Interview Date</th>
              <th scope="col">Interview Address</th>
              <th scope="col">DOJ</th>
              <th scope="col">Salary</th>
              <th scope="col" colSpan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((items) => {
              return (
                <tr key={items.id}>
                  <td>{items.designation_name}</td>
                  <td>{items.department}</td>
                  <td>{items.experience}</td>
                  <td>{items.expected_salary}</td>
                  <td>{items.notice_period}</td>
                  <td>{items.high_qualification}</td>
                  <td>{items.industry_name}</td>
                  <td>{items.location}</td>
                  <td>{items.state}</td>
                  <td>{items.reason}</td>
                  <td>{items.interview_day}</td>
                  <td>{items.interview_address}</td>
                  <td>{items.dob}</td>
                  <td>{items.salary}</td>

                  {/* <td > <Link to={'/Candidate_manage_job'}><FaCheckDouble/></Link>
              </td> */}
                  <td>
                    <Link to={"/View_manage_job/" + items.id}>
                      <GrFormView />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

{
  /*export default function Datatable() {
  return (
    {/*<div className='table-responsive'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='TableRowHead'>
          <TableRow>
            <TableCell component="th" align="justify" class="thead">Designation</TableCell>
            <TableCell component="th" align="justify" class="thead">Department</TableCell>
            <TableCell component="th" align="justify" class="thead">Total Experience</TableCell>
            <TableCell component="th" align="justify" class="thead">Expected Salary</TableCell>
            <TableCell component="th" align="justify" class="thead">Notice Period</TableCell>
            <TableCell component="th" align="justify" class="thead">Qualification</TableCell>
            <TableCell component="th" align="justify" class="thead">Industry</TableCell>
            <TableCell component="th" align="justify" class="thead">Location</TableCell>
            <TableCell component="th" align="justify" class="thead">State</TableCell>
            <TableCell component="th" align="justify" class="thead">Role & Responsibities</TableCell>
            <TableCell component="th" align="justify" class="thead">Status</TableCell>
            <TableCell component="th" align="justify" class="thead">Reason</TableCell>
            <TableCell component="th" align="justify" class="thead">Interview Date</TableCell>
            <TableCell component="th" align="justify" class="thead">Interview Address</TableCell>
            <TableCell component="th" align="justify" class="thead">DOJ</TableCell>
            <TableCell component="th" align="justify" class="thead">Salary</TableCell>
          </TableRow>
        </TableHead>
       
      </Table>
  </TableContainer>*/
}
