import React, {useState,useEffect} from "react";
import { Link,useHistory, useParams  } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import axios from "axios";

export default function Profile() {

    const id = localStorage.getItem('auth_token');
    const name = localStorage.getItem('auto_name');
    console.log(id)
    // const loadUser = async () => {
    //   const result = await axios.get(`https://syscorpinc.in/cogent_api/candidate/view/${id}`);
    //  console.log(result.data)
    // };

    const fetch = () =>{
        axios.get(`/candidate/view/${id}`).then((res)=>{
           setUser(res.data);
        })
    }

const urlPost = "/candidate/updateProfile"
const[user,setUser] = useState({
name: "",
mobile_no: "",
email: "",
designation: "",
file: ""
});
function handleSubmit(e) {
    e.preventDefault();
    axios.post(urlPost, {
      id: id,
      name: user.name,
      mobile_no: user.mobile_no,
      email: user.email,
      designation: user.designation,
      file: user.image
    })
        .then((res) => {
            alert("Form Submitted Successfully");
            console.log(res.data);
        
        });
};



function handleChange(e){
  const newdata={...user}
  newdata[e.target.id]= e.target.value
  setUser(newdata)
  console.log(newdata)
}

useEffect(() => {
    fetch();
  }, []);
return(
    <div className="utf-dashboard-content-container-aera" data-simplebar>
            <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
                <div className="row">
                    <div className="col-xl-12 z-index-1">
                        <h3>Resume</h3>
                        <nav id="breadcrumbs">
                            <ul>
                                <li><Link to=''>Home</Link></li>
                                <li><Link to="/Dashboard">Dashboard</Link></li>
                                <li>Resume</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

<form >
<div className="container p-5">
    <h1>Update Profile</h1>
    <div className="container pt-4">
    <label><b>Name</b></label>
    <input type="text" id="name" placeholder="Enter Your Name" defaultValue={user.name} onChange={e => handleChange(e)}/>
    <label><b>Mobile No</b></label>
    <input type="text" id="mobile_no" placeholder="Enter Your Mobile No.." defaultValue={user.mobile_no} onChange={e => handleChange(e)}/>
    <label><b>Email</b></label>
    <input type="email" id="email" placeholder="Enter Your Email" defaultValue={user.email} onChange={e => handleChange(e)}/>
    <label><b>Designation</b></label>
    <input type="text" id="designation" placeholder="Enter Your designation"  defaultValue={user.designation} onChange={e => handleChange(e)}/>
    <label>
    <div className='container'>
    <input type="file" id="image"   defaultValue={user.image} onChange={e => handleChange(e)}/>
    </div>
    </label>
    </div>
    <button type="submit" onClick={handleSubmit} className="login">Update</button>
</div>


</form>
</div>


)};