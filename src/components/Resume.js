
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from 'axios'
import ResumeDataTable from '../datatables/ResumeDataTable';
import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";


const ManageJobsPosts = () => {
    //for img....
    
    const [picture, setPicture] = useState('');
    const onChangePicture = e => {
      console.log('picture: ', picture);
      setPicture(URL.createObjectURL(e.target.files[0]));
    };
    const image = localStorage.getItem('img');
    console.log(image);
    const id = localStorage.getItem('auth_token');
    console.log(id);
const name = localStorage.getItem('auth_name');
console.log(name);
    const fetch = () =>{
        axios.get(`/resume/view/${id}`).then((res)=>{
           setUser(res.data);
        })
    }
    useEffect(() => {
        fetch();
      }, []);
      
     
        const urlPost = "/resume/add"
        const navigate = useNavigate();
        const [user, setUser] = useState({
            name:"", 
            mobile_no:"",
            email:"",
            Application_Alert:"",
            Interviewer_Name:"",
            contact_no:"",
            video_resume:"",
            role_responsibility:"",
            designation_id:"",
            gender_id:"",
            department_id:"",
            total_experience:"",
            current_salary_id:"",   
            expected_salary_id:"",
            qualification_id:"",
            industry_id:"",
            notice_period_id:"",
            preffered_location_id:"",
            image:""

});
        function handleSubmit(e) {
            e.preventDefault();
            axios.post(urlPost, "/image/add",{
            id: id,
            name:name, 
            mobile_no: user.mobile_no,
            email: user.email,
            Application_Alert: user.Application_Alert,
            Interviewer_Name: user.Interviewer_Name,
            contact_no: user.contact_no,
            video_resume: user.video_resume,
            role_responsibility:user.role_responsibility,
            designation_id:user.designation_id,
            gender_id:user.gender_id,
            department_id:user.department_id,
            total_experience_id:user.total_experience_id,
            current_salary_id:user.current_salary_id,
            expected_salary_id:user.expected_salary_id,
            qualification_id:user.qualification_id,
            industry_id:user.industry_id,
            notice_period_id:user.notice_period_id,
            preffered_location_id:user.preffered_location_id,
            image:user.image,
            profile_image:user.profile_image
            }) .then((response) => {
                alert("Form Submitted Successfully");
                navigate("/Experience");
                console.log(response.data);
            });
    };
    function handleChange(e){
        const newdata={...user}
        newdata[e.target.id]= e.target.value
        setUser(newdata)
        console.log(newdata)
      }
    const [dcategory, setDcategory] = useState([]);
    const fetchDataDesignation = () => {
        axios.get("/designation/view")
            .then((response) => {
                console.log(response);
                setDcategory(response.data.result);
            })
    };
    const [gcategory, setGcategory] = useState([]);
    const fetchDataGender = () => {
      axios.get("/gender/view")
          .then((response) => {
              console.log(response);
              setGcategory(response.data.result);
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
    }
    const [cscategory, setCscategory]= useState([]);
    const fetchCurrentSalary = () => {
        axios.get("/current_salary/view")
        .then((response)=> {
            console.log(response);
            setCscategory(response.data.result);
           })
       }
    const [xcategory, setXcategory]= useState([]);
    const fetchXsalary = () =>{
        axios.get("/expectedsalary/view")
        .then((response)=> {
        console.log(response);
        setXcategory(response.data.result);
    })
}
    const [hcategory, setHighestEducation]=useState([]);
    const fetchHighestEducation = () =>{
        axios.get("/qualification/view")
        .then((response)=> {
        console.log(response);
        setHighestEducation(response.data.result);
    }
    )
}
    const [industry, setIndustry]= useState([]);
    const fetchIndustry =()=>{
        axios.get("/industry/view_industry")
        .then((response)=> {
        console.log(response);
        setIndustry(response.data.result);
    })
}
    const [notice, setNotice]= useState([]);
    const fetchNotice =()=>{
        axios.get("/noticeperiod/view")
        .then((response)=> {
        console.log(response);
        setNotice(response.data.result);
    })
}
    const [prefered, setPrefered]=useState([]);
    const fetchPreferedLocation=()=>{
        axios.get("/location/view")
        .then((response)=> {
        console.log(response);
        setPrefered(response.data.result);
    })
}

       useEffect(() => {
        fetchDataDepartment();
        fetchDataDesignation();
        fetchDataGender();
        fetchDataTotalexperience();
        fetchCurrentSalary();
        fetchXsalary();
        fetchHighestEducation();
        fetchIndustry();
        fetchNotice();
        fetchPreferedLocation();
    }, []);


      {/*const[design, setDesignation] = useState({});

     useEffect( ()=> {
        const getDesignation= async ()=>{
            
            const req= await fetch("designation/view");
            const getres= await req.json();
            console.log(getres);
            setDesignation(await getres);
        }
     getDesignation();

        
    },[]);*/}



    return (
         
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
                                <h3>General Information</h3>
                            </div>
                            <Form onSubmit={(e) => handleSubmit(e)} >
                            <div className="content with-padding padding-bottom-10">
                                <div className="row">
                                    <div className="col-xl-12 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                        <div className="utf-submit-field">
                                                            <h5>Name</h5>
                                                            <input
                                                                required
                                                                type="text"
                                                                className="utf-with-border"
                                                                placeholder="Enter Your Name"
                                                                defaultValue={name}
                                                                id="name" 
                                                                onChange={e => handleChange(e)}
                                                            />
                                                        </div></div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                        <div className="utf-submit-field">
                                                            <h5>Designation</h5>

                                                            <Form.Select
                                                               required as = "select"
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
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 align-self-center">
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                        <div className="ImageUploadBox">
                                                            
                                                        <img className=""  src={picture}  required ></img>
                                                            {/* <p>Photo</p> */}
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 FileUpload">
                                                        <input type="file"  id="image" name="image" required onChange={onChangePicture}/>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Gender</h5>
                                            {/*<Form.Select
                                                className=""
                                                data-size="3"
                                                defaultValue="Select Category"
                                                id="gender_id"
                                                onChange={e => handleChange(e)}
                                            >
                                                <option value="0">---Choose Gender---</option>
                                               {gcategory.map((ig) => (
                                                    <option key={ig.id} value={ig.id}>
                                                        {ig.gender}
                                                </option>
                                                ))}
                                               </Form.Select>*/}
                                               <Form.Select
                                                required as = "select"
                                                defaultValue={user.gender_id}
                                                id="gender_id"
                                                onChange={(e) => handleChange(e)}
                                            >  
                                                {gcategory.map((ig) => (
                                                    <option key={ig.id} value={ig.id}>
                                                        {ig.gender}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Department</h5>

                                            <Form.Select
                                                required as = "select"
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
                                            {/*<Form.Select
                                                className="  "
                                                data-value="0 To 6 Years"
                                                data-size="5"
                                                title="Select Experience"
                                                id="exselect"
                                                onChange={e => handleChange(e)}
                                            >
                                                <option value="1 year">1 Year</option>
                                                <option value="1.5 year">1.5 Year</option>
                                                <option value="2year">2 Year</option>
                                                <option value="2.5year">2.5 Year</option>
                                                <option value="3 year">3 Year</option>
                                                </Form.Select>*/}

                                            <Form.Select
                                                required as = "select"
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
                                            <h5>Current Salary</h5>
                                            <Form.Select
                                                required as = "select"
                                                className="  "
                                                defaultValue={user.current_salary_id}
                                                id="current_salary_id"
                                                onChange={e => handleChange(e)}
                                            >
                                                {cscategory.map((ic) => (
                                                    <option key={ic.id} value={ic.id}>
                                                        {ic.current_salary}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Expected Salary</h5>
                                            <Form.Select
                                                required as= "select"
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
                                            <h5>Highest Education</h5>
                                            <Form.Select
                                                required as = "select"
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
                                                required as = "select"
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
                                            <h5>Notice Period</h5>
                                            <Form.Select
                                               required as = "select"
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
                                            <h5>Mobile Number</h5>
                                            <input
                                                required
                                                type="text"
                                                maxLength={10}
                                                className="utf-with-border"
                                                placeholder="+91-999-999-9990"
                                                defaultValue={user.mobile_no}
                                                id="mobile_no"
                                                onChange={e => handleChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Email ID</h5>
                                            <input
                                                required
                                                type="email"
                                                defaultValue={user.email}
                                                className="utf-with-border"
                                                placeholder="abc@gmail.com"
                                                id="email" onChange={e => handleChange(e)}
                                            />
                                        </div>
                                    </div>

                                    {/*<div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Application Alert</h5>

                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="shyam.cogent@gmail.com"
                                                id="Application_Alert"
                                        defaultValue={user.Application_Alert}
                                                onChange={e => handleChange(e)}
                                            />
                                        </div>
                                                </div>*/}

                                    {/*<div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Interviewer Name</h5>
                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="Interviewer Name"
                                                id="Interviewer_Name"
                                                defaultValue={user.Interviewer_Name}
                                                onChange={e => handleChange(e)}
                                            />
                                        </div>
                                                </div>*/}

                                   {/* <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Contact No</h5>
                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="Contact No"
                                                id="contact_no"
                                                defaultValue={user.contact_no}
                                                onChange={e => handleChange(e)}
                                            />
                                        </div>
                                                </div>*/}

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Preffered Location</h5>
                                            <Form.Select
                                                required as ="select"
                                                defaultValue={user.preffered_location_id}
                                                id="preffered_location_id"
                                                onChange={e => handleChange(e)}
                                            >
                                              
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
                                            <h5>Video Resume</h5>
                                            <input
                                                required    
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="your link"
                                                defaultValue={user.video_resume}
                                                id="video_resume"
                                                onChange={e => handleChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Role & Responsibility</h5>
                                            <textarea
                                                required
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
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <ResumeDataTable />
                                    </div>
                                </div>
                            </div>
                            <div className="utf-centered-button">
                                <Link
                                    to=" "
                                    className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-100" type="reset" onClick={handleSubmit}>Add Experience </Link>
                            </div>
                            </Form>
                        </div>
                    </div>  
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ManageJobsPosts;