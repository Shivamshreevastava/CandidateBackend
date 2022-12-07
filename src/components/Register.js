import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function Register() {
    const [data,setdata] = useState({
        name:"",
        email:"",
        mobile_no:""
    })
    const navigate = useNavigate();
    console.log(navigate)

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setdata(prev =>{
            return{
                ...prev,[name]:value
            }
        })

       
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('/candidate/register',{name:data.name,email:data.email,mobile_no:data.mobile_no}).then((res)=>{
            navigate('/')
            if(res.data.message === 'Registration successfull'){
            alert(res.data.message);
            }else{
               alert(res.data.message) ;
            }
        }).catch((err)=>console.log(err.response))
    }

  return (
    <div className='container mt-5'>
            <div className='box-shadow-1'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <img src="../images/register.jpg" className='custom-8'  />
                    </div>
                    <div className='col-md-5 p-4'>
                        <form>
                            <label style={{color:"white"}}>Enter Your Name:</label> 
                            <input className='form-control' type="phone" name="name" placeholder='Enter Your Name' 
                            defaultValue={data.name}
                            onChange={handleChange}/>
                            <label style={{color:"white"}}>Enter Your Email:</label>
                            <input className='form-control' type="phone" name="email" placeholder='Enter Your Email'
                             defaultValue={data.email}
                             onChange={handleChange} />
                            <label style={{color:"white"}}>Enter Your Number:</label> 
                            <input className='form-control' type="phone" name="mobile_no" placeholder='Enter Your Number'
                            defaultValue={data.mobile_no}
                             onChange={handleChange} />
                            <button type="submit" onClick={handleSubmit} className='btn btn-warning'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register;