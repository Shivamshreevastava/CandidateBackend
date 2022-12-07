import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import { Form } from 'react-bootstrap';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import CurrentJobs from './components/CurrentJobs';
import ManageJob from './components/ManageJob';
import Resume from './components/Resume';
import CandidateApplication from './components/candidateApplications';
import AffiliateLink from './components/AffiliateLink';
import CreateTraining from './components/CreateTraining';
import EBooks from './components/EBooks';
import Inquiry from './components/Inquiry';
import Login from './components/Login';
import Otp from './components/Otp';
import Register from './components/Register';
import axios from 'axios';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Try from './components/Try';
import Editresume from './datatables/Editresume';
import Candidate_manage_job from './datatables/Candidate_manage_job';
import View_manage_job from './datatables/View_manage_job';

import {
  Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

axios.defaults.baseURL = "https://holowash.in/apicogent"

function App() {
  const [isLogin,setisLogin] = useState(localStorage.getItem('auth_token'));
 

  const setToken = (data) =>{
    localStorage.setItem('auth_token',data.id);
    localStorage.setItem('auth_name',data.name);
    setisLogin();
  }

  const removeToken = () =>{
    localStorage.removeItem('auth_token');
    setisLogin();
  }


  if(!isLogin || isLogin === null){
    return(
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/" />}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/otp" element={<Otp setToken={setToken}/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    )
  }
  else{
  return (
    <div> 
      <Header  removeToken={removeToken}/>
      <div className="utf-dashboard-container-aera">
      <SideBar/>
      <Routes>
      <Route path="*" element={<Navigate to="/Dashboard" />}/>
      <Route path="/" element={<Dashboard/>} />
     <Route path="/Dashboard" element={<Dashboard/>} />
     <Route path="/CurrentJobs" element={<CurrentJobs/>}/>
     <Route path="/ManageJob" element={<ManageJob/>}/>
     <Route path="/CandidateApplications" element={<CandidateApplication/>}/>
     <Route path="/AffiliateLink" element={<AffiliateLink/>}/>
     <Route path="/CreateTraining" element={<CreateTraining/>}/>
     <Route path="/EBooks" element={<EBooks />}/>
     <Route path="/Resume" element={<Resume/>}/>
     <Route path="/Inquiry" element={<Inquiry/>}/>
     <Route path="/Profile" element={<Profile/>}/>
     <Route path="/Try" element={<Try/>}/>
     <Route path="/Experience" element={<Experience/>}/>
     <Route path="/Editresume/:id" element={<Editresume/>}/>
     <Route path="/Candidate_manage_job" element={<Candidate_manage_job/>}/>
     <Route path='/View_manage_job/:id' element={<View_manage_job/>}/>
    
     </Routes>
     </div>
    </div>
  );
}
}


export default App;
