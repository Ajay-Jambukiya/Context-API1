import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

let initialState={id:'',username:'',email:'',password:'',confirmpassword:'',role:'user'}

const Register = () => {
    let [user,setUser]=useState({...initialState})
    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        // alert(JSON.stringify(user))
        axios.post('https://664619b951e227f23aadc7d0.mockapi.io/users',user).then((res)=>{
            toast.success('register succesfully')
            navigate('/login')
        }).catch((error)=>{
            toast.error(error.message)
        })
    }

  return (
    <div class="container mt-3 col-8">
      <h4>Register Here</h4> 
      <form onSubmit={handleSubmit}>
      <div class="form-floating mb-3 mt-3">
        <input
          type="text"
          class="form-control shadow"
          name="username"
          id="formId1"
          placeholder=""
          value={user.username}
          onChange={(e)=>setUser({...user,username:e.target.value})}
          required
        />
        <label for="formId1">Username</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control shadow"
          name="email"
          id="formId1"
          placeholder=""
          value={user.email}
          onChange={(e)=>setUser({...user,email:e.target.value})}
          required
        />
        <label for="formId1">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control shadow"
          name="password"
          id="formId1"
          placeholder=""
          value={user.password}
          onChange={(e)=>setUser({...user,password:e.target.value})}
          required
        />
        <label for="formId1">Password</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control shadow"
          name="confirm password"
          id="formId1"
          placeholder=""
          value={user.confirmpassword}
          onChange={(e)=>setUser({...user,confirmpassword:e.target.value})}
          required
        />
        <label for="formId1">Confirm Password</label>
      </div>
      <div class='d-grid'>
        <button class='btn btn-outline-primary shadow' type="submit">Register</button>
      </div>
      </form>
    </div>
  );
};

export default Register;
