import axios from 'axios';
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';


function Login(){
    const [mobile_no,setmobile_no] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('candidate/otp',{mobile_no:mobile_no}).then((res)=>{
            alert(res.data.message);
            navigate('/otp',{state:{mobile_no:mobile_no}});
        })
    }

    

    return (
        <div className='container mt-5'>
            <div className='box-shadow'>
                <div className='row align-items-center heee'>
                    <div className='col-md-6'>
                        <img src="../images/login7.png" className='custom-8' />
                    </div>
                    <div className='col-md-5'>
                        <form>
                            <label style={{ color: "white" }}>Login With Mobile Number:</label>
                            <input className='form-control' type="phone" name="phone" placeholder='880-064-7651'
                            defaultValue={mobile_no}
                            onChange={(e)=>{
                                setmobile_no(e.target.value);
                            }} />
                            <div className='row' style={{alignItems: "end"}}>
                                <div className=' col-md-3'>
                                    <button type="submit" className='btn btn-warning'
                                    onClick={handleSubmit}>Send Otp</button>
                                </div>
                                <div className='col-md-3'>
                                    <Link to="/register" style={{color:"white" ,textDecoration:"underline"}}>Register Now!</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;