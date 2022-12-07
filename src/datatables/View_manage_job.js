import React, {useState,useEffect} from "react";
import { Link,useHistory, useParams  } from "react-router-dom";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';



import axios from "axios";
export default function Candidate_manage_job() {
    const [data, setdata] = useState({
        
    });

    const [data1, setdata1] = useState({
        recruiter_id:""
    });


  const { id } = useParams();
 
    const fetch = () => {
        axios.get(`/job_posting/view/${id}`).then((res) => {
          //console.log(res)
            setdata(res.data.result);
            setdata1(res.data.result)
            //console.log(res.data.result);
        })

    }


    const handleApplied = () =>{
        axios.post('applied/add',{user_id:localStorage.auth_token,job_id:id,recruiter_id:data1.recruiter_id}).then((res)=>{
            alert("Successfully Applied");
        })
    }


    useEffect(() => {
        fetch()
    }, [])

    return(
       

               

        <div className="utf-dashboard-content-container-aera" data-simplebar>  

        <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
                    <div className="row">
                        <div className="col-xl-12 z-index-1">
                            <h3>Candidate Details</h3>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><Link to=''>Home</Link></li>
                                    <li><Link to="/Dashboard">Dashboard</Link></li>
                                    <li>Candidate Details</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>    
            <section className="content">
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row">
                                                   
               <div className="utf-dashboard-content-inner-aera">
                            <div className="row">
                                <div className="col-xl-12">
                                    <section className="jd-header" >

                                        <div className="top">
                                            <div className="jd-top-head">
                                                <header><h1 className="jd-header-title" title="Mega BPO Hiring Voice Process -Tech Mahindra / Remote-  Work From Home">Candidate Details : </h1>
                                                </header>
                                                 <div >
                                                    <button style={{ color: "green", fontSize:"14px", }} className="box-sha" onClick={handleApplied}>Apply</button>  
                                                </div>
                                            </div>
                                            <div className=" custom-hi d-flex">
                                                <div>
                                                
                                                <p>Department</p>
                                                <p>Designation</p>
                                                <p>Total_experience</p>
                                                <p>Qualifications</p>
                                                {/* <p>recruiter_id</p> */}
                                               
                                                </div>
                                                <div className="ml-5">
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    <p>:</p>
                                                    {/* <p>:</p> */}
                                                   
                                                
                                                </div>
                                                <div className="ml-5">
                                                <p ><small>{data.category_name}</small></p>
                                                <p ><small>{data.designation_name}</small></p>
                                                <p ><small>{data.experience}</small></p>
                                                <p ><small>{data.high_qualification}</small></p>
                                                {/* <p><small>{data1.recruiter_id}</small></p> */}
                                                </div>
                                            </div>
                                        </div>



                                    </section>

                                    <section className="job-desc jd-header">
                                        <h2>Job description</h2>
                                        <div className="dang-inner-html">
                                            <p>
                                                <strong className="jb-strong">
                                                  
                                                </strong>
                                            </p>
                                        </div>
                                        <div className="other-details">
                                            <div className="details d-flex">
                                                <label>Role</label><span>Front End Developer<span className="comma">,</span></span>
                                            </div>
                                            <div className="details">
                                                <label>Industry Type</label><span>IT Services &amp; Consulting<span className="comma">,</span></span>
                                            </div>
                                            <div className="details">
                                                <label>Functional Area</label><span>Engineering - Software<span className="comma">,</span></span>
                                            </div>
                                            <div className="details">
                                                <label>Employment Type</label><span><span>Full Time, Permanent</span></span>
                                            </div>
                                            <div className="details">
                                                <label>Role Category</label><span><span>Software Development</span></span>
                                            </div>
                                        </div>
                                        <div className="education">
                                            <div className="heading">Education</div>
                                            <div className="details"><label>UG :</label><span className="">Any Graduate</span></div>
                                            <div className="details"><label>PG :</label><span className="">Any Postgraduate</span></div>
                                        </div>
                                        <div className="key-skill">
                                            <div className="heading">Key Skills</div>
                                            <div>
                                                <a target="_blank" className="chip non-clickable"><span>Oracle Revenue Management Billing</span></a>
                                            </div>
                                        </div>

                                    </section>


                                
                                       
                                        </div></div>
                                        </div>      
                                     
                                               

                                   
                                  
                                            

                                    </div>

                                </div>
                            </div>
         
           </section>
                   
           
           
         
          
</div>

               
            
                )};