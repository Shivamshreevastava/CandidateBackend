import React, { useState } from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import axios from 'axios';


function Otp(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [data,setdata] = useState({
    mobile_no:location.state.mobile_no,
    otp:""
  })

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setdata(prev =>{
      return{
        ...prev,[name]:value
      }
    }
   )
   console.log(data)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('candidate/login_otp',{mobile_no:data.mobile_no,otp:data.otp}).then((res)=>{
      if(res.data.resp.status === '1'){
        alert('successfully login');
        props.setToken(res.data.resp.details);
        window.location.href='/Dashboard';
      }else{
        alert('otp is wrong');
      }
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
                            <label style={{ color: "white" }}>Enter OTP Here:</label>
                            <input className='form-control' type="phone" name="otp" placeholder='880-064'
                            onChange={handleChange}
                            defaultValue={data.otp} />
                                    <button type="submit" onClick={handleSubmit} className='btn btn-warning'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Otp;