import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ResumeDataTable() {
  // console.log(candidate_id);
  // const { candidate_id } = useParams();
  const [data, setData] = useState([]);
  const id = localStorage.getItem('auth_token');
  console.log(id);
  const fetchData = async () => {
    await axios.get("http://localhost/cogent_api/experienceanddesgination/view")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        //console.log(res.data.result);
      })
  };



  const [user, setUser] = useState({

  });


  useEffect(() => {

    fetchData();
  }, []);

  function deleteUser(id) {
    //alert('https://syscorpinc.in/cogent_api/candidate_experience/delete/{id}'+id);
    axios.get('http://localhost/cogent_api/candidate_experience/delete/' + id)
      .then(res => console.log(res.data));
    alert("deleted succefully");
    fetchData();

  }

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Company_Name</th>
            <th scope="col">Department</th>
            <th scope="col">Exp. Year</th>
            <th scope="col">HR Email</th>
            <th scope="col">Contact Number</th>
            <th scope="col" colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items) => {
            return (<tr key={items.id}>
              <td defaultValue={user.company_name} id="company_name">{items.company_name}</td>
              <td defaultValue={user.designation_id} id="designation_id">{items.designation_name}</td>
              <td defaultValue={user.total_experience_id} id="total_experience_id">{items.experience}</td>
              <td defaultValue={user.hr_email} id="hr_email">{items.hr_email}</td>
              <td defaultValue={user.contact_no} id="contact_no">{items.contact_no}</td>
              <td style={{ borderStyle: "none" }}>
                <Link style={{ padding: "2px" }} to={"/Editresume/" + items.id}>Edit</Link>
              </td>
              <td>
                <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteUser(items.id)}>Delete</button></td>
            </tr>)

          })}

        </tbody>
      </table>
    </div>
  )
};