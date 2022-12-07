
import React, { Component } from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const ManageJobsPosts = () => {

    return (

        <div className="utf-dashboard-content-container-aera" data-simplebar>
            <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
                <div className="row">
                    <div className="col-xl-12 z-index-1">
                        <h3>Manage Jobs Post</h3>
                        <nav id="breadcrumbs">
                            <ul>
                                <li><a href="index.php">Home</a></li>
                                <li><Link to="/Dashboard">Dashboard</Link></li>
                                <li>Manage Jobs Post</li>
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
                            <div className="content with-padding padding-bottom-10">
                                <div className="row">
                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Designation</h5>
                                            <Form.Select aria-label="Default select example" className="">
                                                <option>Destingation</option>
                                                <option value="Web Developer">Web Developer</option>
                                                <option value="Project Manager">Project Manager</option>
                                                <option value="Team Leader">Team Leader</option>
                                                <option value="SoftWare Developer">SoftWare Developer</option>
                                                <option value="Human Resources">Human Resources</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Gender</h5>
                                            <Form.Select
                                                className=""
                                                data-size="3"
                                                title="Select Category"
                                            >
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Department</h5>
                                            <Form.Select
                                                className=""
                                                data-size="5"
                                                title="Select Category"
                                            >
                                                <option>Front-end Developer</option>
                                                <option>Back-end Developer</option>
                                                <option>Web designing</option>
                                                <option>App Developer</option>
                                                <option>React Developer</option>
                                                </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Total Experience</h5>
                                            <Form.Select
                                                className="  "
                                                data-value="0 To 6 Years"
                                                data-size="5"
                                                title="Select Experience"
                                            >
                                                <option>1 Year</option>
                                                <option>1.5 Year</option>
                                                <option>2 Year</option>
                                                <option>2.5 Year</option>
                                                <option>3 Year</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Expected Salary</h5>
                                            <Form.Select
                                                className="  "
                                                data-value="20000 To 50000"
                                                data-size="5"
                                                title="Select Experience"
                                            >
                                                <option>20000</option>
                                                <option>25000</option>
                                                <option>30000</option>
                                                <option>40000</option>
                                                <option>50000</option>
                                                </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Qualification</h5>
                                            <Form.Select
                                                className="  "
                                                data-size="5"
                                                title="Select Experience"
                                            >
                                                <option>10th or Below 10th</option>
                                                <option>12th Pass</option>
                                                <option>Dipolma</option>
                                                <option>ITI</option>
                                                <option>Graduate</option>
                                                </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Industry</h5>
                                            <Form.Select
                                                className="  "
                                                data-size="5"
                                                title="Select Experience"
                                            >
                                                <option>IT Company</option>
                                                <option>Multi National Company</option>
                                                <option>Web Developement Company</option>
                                                <option>Security Comapny</option>
                                                <option>Medical Care</option>
                                                </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Location</h5>
                                            <div className="utf-input-with-icon">
                                            <Form.Select
                                                    className="  "
                                                    data-size="5"
                                                    title="Select Experience"
                                                >
                                                    <option>Delhi</option>
                                                    <option>Noida</option>
                                                    <option>Gurugam</option>
                                                    <option>Faridabad</option>
                                                    <option>Ghaziabad</option>
                                                    </Form.Select>
                                                <i className="icon-material-outline-location-on"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>State</h5>
                                            <Form.Select
                                                className="  "
                                                data-size="5"
                                                title="Select Experience"
                                            >
                                                <option>Delhi</option>
                                                <option>Noida</option>
                                                <option>Gurugam</option>
                                                <option>Faridabad</option>
                                                <option>Ghaziabad</option>
                                                </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Company Name/Hiring for</h5>
                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="Company Name/Hiring for"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Role & Responsibities</h5>
                                            <textarea
                                                cols="40"
                                                rows="2"
                                                className="utf-with-border"
                                                placeholder="Role & Responsibities"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Application Alert</h5>

                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="shyam.cogent@gmail.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Interviewer Name</h5>
                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="Interviewer Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Contact No</h5>
                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="Contact No"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Interview Type</h5>
                                            <Form.Select
                                                className="  "
                                                data-size="3"
                                                title="Interview Type"
                                            >
                                                <option>Walkin</option>
                                                <option>Schedule</option>
                                                <option>Online</option>
                                                </Form.Select>
                                        </div>
                                    </div>


                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Interview Day</h5>
                                            <Form.Select
                                                className="  "
                                                data-size="6"
                                                title="Interview Day"
                                            >
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                                </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Interview Timming</h5>
                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="11am - 5pm"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Contact View to Interview</h5>
                                            <Form.Select
                                                className="  "
                                                data-size="2"
                                                title="Interview Day"
                                            >
                                                <option>Yes</option>
                                                <option>No</option>
                                                </Form.Select>
                                        </div>
                                    </div>


                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Google Location link</h5>
                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="https://"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Interview Address</h5>
                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="Delhi"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Reminder</h5>
                                            <input
                                                type="text"
                                                className="utf-with-border"
                                                placeholder="Reminder"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="utf-submit-field">
                                            <h5>Paid response</h5>
                                            <Form.Select
                                                className="  "
                                                data-size="2"
                                                title="Paid response"
                                            >
                                                <option>Yes</option>
                                                <option>No</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="utf-centered-button">
                        <a
                            href="#"
                            className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-100"
                        >Submit Jobs <i className="icon-feather-plus"></i
                        ></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ManageJobsPosts;