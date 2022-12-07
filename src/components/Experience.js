import React, {useState,useEffect} from "react";
import { Link,useHistory, useParams  } from "react-router-dom";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from "axios";
export default function Experience() {
    const id = localStorage.getItem('auth_token');
    console.log(id)
    const urlPost = "http://localhost/cogent_api/candidate_experience/add"
        const [user, setUser] = useState({
            candidate_id:"",
            company_name:"",
            designation_id:"",
            total_experience_id:"",
            hr_email: "",
            contact_no:""
          
        });
        const [dcategory, setDcategory] = useState([]);
      const fetchDataDesignation = () => {
        axios.get("/designation/view")
            .then((response) => {
                console.log(response);
                setDcategory(response.data.result);
            })
    };
    const [tcategory, setTcategory]= useState([]);
    const fetchDataTotalexperience = () => {
        axios.get("/total_experience/view")
        .then((response) => {
            console.log(response);
            setTcategory(response.data.result);
        })
    }
        function handleChange(e){
            const newdata={...user}
            newdata[e.target.id]= e.target.value
            setUser(newdata)
            console.log(newdata)
          }
        
        useEffect(() => {
            fetchDataDesignation();
            fetchDataTotalexperience();
         fetch();
        }, []);


       
        function handleSubmit(e) {
            e.preventDefault();
            axios.post(urlPost, {
              id: id,
              candidate_id:id,
              company_name:user.company_name,
              designation_id:user.designation_id,
              contact_no: user.contact_no,
              hr_email: user.hr_email,
              total_experience_id: user.total_experience_id,

            })
                .then((res) => {
                    alert("Form Submitted Successfully");
                    console.log(res.data);
                
                });
        };
        

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



                <div className="utf-dashboard-content-inner-aera">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="dashboard-box">
                            <div className="headline">
                                <h3>Add Experience</h3>
                            </div>
                            <div className="content with-padding padding-bottom-10">
                                <div className="row">
                                    <div className="col-xl-12 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                        <div className="utf-submit-field">
                                                            <h5> Company Name</h5>
                                                            <input
                                                                required
                                                                type="text"
                                                                className="utf-with-border"
                                                                placeholder="Enter Your Name"
                                                                defaultValue={user.company_name}
                                                                onChange={e => handleChange(e)}
                                                                id="company_name" 
                                                               
                                                            />
                                                        </div></div>
                                                        
                                                      
                                    
                                    
                                                       
                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Department</h5>

                                            <Form.Select
                                                required as="select"
                                                defaultValue={user.designation_id}
                                                id="designation_id"
                                                onChange={(e) => handleChange(e)}
                                            >
                                                
                                                {dcategory.map((i) => (
                                                    <option key={i.id} value={i.id}>
                                                        {i.designation_name}
                                                    </option>
                                                ))}
                                            </Form.Select>

                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Exp. Year</h5>
                                            <Form.Select
                                                required as="select"
                                                defaultValue={user.total_experience_id}
                                                id="total_experience_id"
                                                onChange={(e) => handleChange(e)}
                                            >
                                               
                                                {tcategory.map((it) => (
                                                    <option key={it.id} value={it.id}>
                                                        {it.experience}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>HR Email</h5>
                                            <input
                                                required
                                                type="email"
                                                defaultValue={user.hr_email}
                                                className="utf-with-border"
                                                placeholder="abc@gmail.com"
                                                id="hr_email" onChange={e => handleChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Contact Number</h5>
                                            <input
                                                required
                                                type="text"
                                                maxLength={10}
                                                className="utf-with-border"
                                                placeholder="+91-999-999-9990"
                                                defaultValue={user.contact_no}
                                                id="contact_no"
                                                onChange={e => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="utf-centered-button">
                        <Link
                            to=" "
                            className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-100" onClick={handleSubmit} >Add Experience </Link>
                    </div>
                </div>
            </div>
           
            </div>
            </div>


                </div></div>
            
                )};