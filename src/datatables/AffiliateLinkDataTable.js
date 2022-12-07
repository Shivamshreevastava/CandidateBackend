import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from "jquery";

export default function ResumeDataTab() {

  // const [data, setData] = useState([]);
  // const id = localStorage.getItem('auth_token');
  // console.log(id);
  // const { user_id } = useParams();
 
  // const fetchData = async () => {
  //   axios.get(`/applied/view/${id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
        
  //     })
      
        
  // };
  // useEffect(() => {
  //   fetchData();
  //   }, []);

  console.log(data,'data from jquery')

  return (
    <div className='table-responsive'>
    
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Copy Affiliated Link</th>
            <th scope="col">Refferal Name</th>
            <th scope="col">Date of Registration</th>
            <th scope="col">Payment</th>
            
          </tr>
        </thead>
        <tbody>
          {data?.map((items)=>{
            return(<tr key={items.id}>
                    <td>{items.copy_affiliated_link}</td>
                    <td>{items.refferal_name}</td>
                    <td>{items.registration_date}</td>
                    <td>{items.payment}</td>
            </tr>)
          })}

        </tbody>
      </table>
    </div>
</div>
  );
}