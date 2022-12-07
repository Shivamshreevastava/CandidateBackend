import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useParams } from "react-router-dom";

export default function ResumeDataTable() {
    const { candidate_id } = useParams();
    //console.log(candidate_id);
    const [data, setData] = useState([]);
  
    const fetchData = async () => {
      await axios.get("http://localhost/cogent_api/candidate_experience/view")
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
    };
    useEffect(() => {

        fetchData();
      }, []);
      return (
        <div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th>Company_Name</th>
                <th>Department</th>
                <th>Exp. Year</th>
                <th>HR Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((items) => (
                <tr key={items.id}>
                  <td>{items.id}</td>
                  <td>{items.company_name}</td>
                   <td>{items.designation_name}</td>
                  <td>{items.experience}</td>
                </tr>
    
              ))}
            </tbody>
          </table>
        </div>
      )
    };