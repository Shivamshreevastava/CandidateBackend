import React, {useState,useEffect} from "react";
import { Link,useHistory, useParams  } from "react-router-dom";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from "axios";
export default function Candidate_manage_job() {
    const id = localStorage.getItem('auth_token');
    console.log(id);
    const urlPost = "http://localhost/cogent_api/manage_job/add"
        const [user, setUser] = useState({
            
            designation_id:"",
            department_id:"",
            experience_id:"",
            expected_salary_id:"",
            notice_period_id:"",
            qualification_id:"",
            industry_id:"",
            location_id:"",
            state_id:"",
            role_responsibility:""
        });
        const [dcategory, setDcategory] = useState([]);
        const fetchDataDesignation = () => {
          axios.get("/designation/view")
              .then((response) => {
                  console.log(response);
                  setDcategory(response.data.result);
              })
      };
      const [category, setCategory] = useState([]);
      const fetchDataDepartment = () => {
        axios.get("/job_category/view_job")
            .then((response) => {
                console.log(response);
                setCategory(response.data.result);
            })
    };
    const [tcategory, setTcategory]= useState([]);
    const fetchDataTotalexperience = () => {
        axios.get("/total_experience/view")
        .then((response) => {
            console.log(response);
            setTcategory(response.data.result);
        })
    };
    const [xcategory, setXcategory]= useState([]);
    const fetchXsalary = () =>{
        axios.get("/expectedsalary/view")
        .then((response)=> {
         console.log(response);
         setXcategory(response.data.result);
    
    
        })
    };
    const [notice, setNotice]= useState([]);
    const fetchNotice =()=>{
        axios.get("/noticeperiod/view")
        .then((response)=> {
            console.log(response);
            setNotice(response.data.result);
        })
    };
    const [hcategory, setHighestEducation]=useState([]);
const fetchHighestEducation = () =>{
    axios.get("/qualification/view")
    .then((response)=> {
        console.log(response);
        setHighestEducation(response.data.result);
    }
    )
};
const [industry, setIndustry]= useState([]);
const fetchIndustry =()=>{
    axios.get("/industry/view_industry")
    .then((response)=> {
        console.log(response);
        setIndustry(response.data.result);
    })
};
const [prefered, setPrefered]=useState([]);
const fetchPreferedLocation=()=>{
    axios.get("/location/view")
    .then((response)=> {
        console.log(response);
        setPrefered(response.data.result);
    })
};
const [state, setState] = useState([]);
        const fetchDataState = () => {
          axios.get("/state/view")
              .then((response) => {
                  console.log(response);
                  setState(response.data.result);
              })
      };

      
        useEffect(() => {
            fetchDataDesignation();
            fetchDataDepartment();
            fetchDataTotalexperience();
            fetchXsalary();
            fetchNotice();
            fetchHighestEducation();
            fetchIndustry();
            fetchPreferedLocation();
            fetchDataState();
            
       
        }, []);


        function handleChange(e){
            const newdata={...user}
            newdata[e.target.id]= e.target.value
            setUser(newdata)
            console.log(newdata)
          }
        function handleSubmit(e) {
            e.preventDefault();
            axios.post(urlPost, {
            id: id,
           role_responsibility:user.role_responsibility,
            designation_id:user.designation_id,
            designation_name:user.designation_name,
            department_id:user.department_id,
            category_name:user.category_name,
            experience_id:user.experience_id,
            experience:user.experience,
            expected_salary_id:user.expected_salary_id,
            expected_salary:user.expected_salary,
            notice_period_id:user.notice_period_id,
            notice_period:user.notice_period,
            qualification_id:user. qualification_id,
            qualification:user.qualification,
            industry_id:user.industry_id,
            industry_name:user.industry_name,
            location_id:user.location_id,
            location:user.location,
            state_id:user.state_id,
            state:user.state,
          
            }) .then((response) => {
                alert("Form Submitted Successfully");
               
                console.log(response.data);
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
                                <h3>Apply Job</h3>
                            </div>
                            <div className="content with-padding padding-bottom-10">
                                <div className="row">
                                    <div className="col-xl-12 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12">
                                                <div className="row">
                                                   
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="utf-submit-field">
                                            <h5>Designation</h5>

                                            <Form.Select
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
                                            <h5>Department</h5>

                                            <Form.Select
                                                defaultValue={user.department_id}
                                                id="department_id"
                                                onChange={(e) => handleChange(e)}
                                            >
                                               
                                                {category.map((items) => (
                                                    <option key={items.id} value={items.id}>
                                                        {items.category_name}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                    </div>


                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Total Experience</h5>
                                            
                                            <Form.Select
                                                defaultValue={user.experience_id}
                                                id="experience_id"
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
                                            <h5>Expected Salary</h5>
                                            <Form.Select
                                                defaultValue={user.expected_salary_id}
                                                id="expected_salary_id"
                                                onChange={e => handleChange(e)}
                                            >
                                                
                                                {xcategory.map((isalary) => (
                                                    <option key={isalary.id} value={isalary.id}>
                                                        {isalary.expected_salary}
                                                    </option>
                                                ))}
                                                </Form.Select>
                                        </div>
                                    </div>
                                       <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Notice Period</h5>
                                            <Form.Select
                                                defaultValue={user.notice_period_id}
                                                id="notice_period_id"
                                                onChange={e => handleChange(e)}
                                            >
                                                
                                                {notice.map((not)=> (
                                                    <option key={not.id} value={not.id}>
                                                        {not.notice_period}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                    </div>
                                     <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Qualification</h5>
                                            <Form.Select
                                                id="qualification_id"
                                                defaultValue={user.qualification_id}
                                                onChange={e => handleChange(e)}
                                            >
                                                
                                                {hcategory.map((hedu) => (
                                                    <option key={hedu.id} value={hedu.id}>
                                                        {hedu.high_qualification}
                                                    </option>
                                                ))}
                                            </Form.Select>

                                           
                                        </div>
                                    </div>
                                   <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Industry</h5>
                                            <Form.Select
                                                defaultValue={user.industry_id}
                                                id="industry_id"
                                                onChange={e => handleChange(e)}
                                            >
                                               
                                                {industry.map((ind)=> (
                                                    <option key={ind.id} value={ind.id}>
                                                        {ind.industry_name}
                                                    </option>

                                                ) ) }
                                            </Form.Select>

                                        </div>
                                    </div>
                                   <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Preffered Location</h5>
                                            <Form.Select
                                                defaultValue={user.location_id}
                                                id="location_id"
                                                onChange={e => handleChange(e)}
                                            >
                                                <option value="0">--- Choose Location ---</option>
                                                {prefered.map((pre)=> (
                                                    <option pre={pre.id} value={pre.id}>
                                                        {pre.location}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                    </div>
                                 <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>State</h5>
                                            <Form.Select
                                                defaultValue={user.state_id}
                                                id="state_id"
                                                onChange={e => handleChange(e)}
                                            >
                                              
                                                {state.map((st)=> (
                                                    <option st={st.id} value={st.id}>
                                                        {st.state}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                               
                                        </div>
                                    </div>
                                   

                                   
                                   <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="utf-submit-field">
                                            <h5>Role & Responsibility</h5>
                                            <textarea
                                                cols="40"
                                                rows="2"
                                                className="utf-with-border"
                                                placeholder="Role & Responsibility"
                                                defaultValue={user.role_responsibility}
                                                id="role_responsibility"
                                                onChange={e => handleChange(e)}
                                            ></textarea>
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
                            className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-100" onClick={handleSubmit} >Apply Job </Link>
                    </div>
                </div>
            </div>
           
            </div>
            </div>


                </div></div>
            
                )};