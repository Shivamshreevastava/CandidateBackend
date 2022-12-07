import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Datatable() {
  const [data, setData] = useState([]);
  const id = localStorage.getItem('auth_token');
  console.log(id);
  const { user_id } = useParams();
 
  const fetchData = async () => {
    axios.get(`/applied/view/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        
      })
      
        
  };
  useEffect(() => {
    fetchData();
    }, []);


  return (
    <div className='table-responsive'>
   
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
            <th scope="col">Candidate Interview feedback</th>
            <th scope="col">Reccomended Training</th>
            <th scope="col">Reccomended Books</th>
            <th scope="col">Course</th>
            <th scope="col">Apply</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
         {data.map((items) => {
            return (<tr key={items.id}>
                      <td >{items.designation_name}</td> 
                      <td >{items.category_name}</td>
                      <td >{items.company_name}</td>
                      <td >{items.experience}</td>
                      <td >{items.high_qualification}</td>
                      <td >{items.role_responsliblity}</td>
                      <th >{items.Industry}</th>
                      <th >{items.candidate_interview_feedback}</th>
                      <th >{items.recomended_traning}</th>
                      <th >{items.recomendend_books}</th>
                      <th >{items.course}</th>
                      <th >{items.apply}</th>
                      <th >{items.status}</th>
                    </tr>)
         })} 

</tbody>
      </table>
    </div>
</div>

    
  );
}