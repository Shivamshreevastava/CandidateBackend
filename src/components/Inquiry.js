import React,{useState,useEffect} from 'react';
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
// import Axios from 'axios'
// import Datatable6 from '../datatables/DashboardDataTable';

const Inquiry = () => {

//     const [notes, setNotes] = useState([]);
//     // const navigate = useNavigate();
   
//     const fetchData = () => {
//         Axios.get("")
//              .then((res) => {
//                   console.log(res.data);
//                   setNotes(res.data.result);
//              });
//    }

//     const handleDelete = (id) => {
//         Axios.get(" " + id)
//              .then((res) => {
//                   alert("Data Deleted Successfully");
//                   fetchData();

//              });
//    }

//    useEffect(() => {
//     fetchData();
//     }, []);
    
    return (
            <div class="utf-dashboard-content-container-aera" data-simplebar>
                <div id="dashboard-titlebar" class="utf-dashboard-headline-item">
                    <div class="row">
                        <div class="col-xl-12 z-index-1">
                            <h3>Inquiry</h3>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="index.php">Home</a></li>
                                    <li><a href="dashboard.php">Dashboard</a></li>
                                    <li>Inquiry</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="utf-dashboard-content-inner-aera">
                    <div class="row">
                        <div class="col-xl-12">

                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div className="utf-dashboard-content-inner-aera">
                     <div className="row">
                    <div className="col-xl-12 ">
                        <div className="dashboard-box">
                            <div className="headline">
                                <h3>Inquiry Details</h3>
                            </div>
                            <div className="content with-padding padding-bottom-10">
                                <div className="row">
                                    

                                <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Name</h5>
                                            <input
                                                required
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="Interviewer Name"
                                            />
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
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Email ID</h5>
                                            <input
                                                required
                                                type="email"
                                                maxLength={10}
                                                className="utf-with-border"
                                                placeholder="abc@gmail.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Select Query</h5>
                                            <Form.Select
                                                required as ="select"
                                                className="  "
                                                data-size="5"
                                                title="Select Experience"
                                            >
                                                <option>Insurance</option>
                                                <option>Loan</option>
                                                <option>Legal Service</option>
                                               
                                            </Form.Select>

                                        </div>
                                    </div>

                                    <div className="col-xl-12 col-md-12 col-sm-12">
                                        <div className="utf-submit-field">
                                            <h5>Inquiry</h5>
                                            <textarea
                                                required
                                                cols="40"
                                                rows="2"
                                                className="utf-with-border"
                                                placeholder="Inquiry"
                                            ></textarea>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="utf-centered-button margin-bottom-100">
                        <Link
                            to="#"
                            className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0"
                        >Submit </Link>
                    </div>
                </div>
                    </div>
                    <Footer />
                </div>
            </div>
    )
}

export default Inquiry;