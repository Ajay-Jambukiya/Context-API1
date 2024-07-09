import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

let initialState={email:'',password:''}

const Login = () => {
    let [userlogin,setUserlogin]=useState({...initialState})
    let navigate=useNavigate()

    let handleLogin=(e)=>{
        e.preventDefault()
        axios.get(`https://664619b951e227f23aadc7d0.mockapi.io/users?email=${userlogin.email}`).then((res)=>{
            // console.log(res.data[0].password)
            if(res.data[0].password==userlogin.password){
                if(res.data[0].role=='admin'){
                    localStorage.setItem('email',userlogin.email)
                    localStorage.setItem('role','admin')
                    toast.success('login sucessfully')
                    navigate('/admindash')
                }else if(res.data[0].role=='user'){
                    localStorage.setItem('email',userlogin.email)
                    localStorage.setItem('role','user')
                    toast.success('login sucessfully')
                    navigate('/dash')
                }
            }else{
                toast.error(`password doesn't match`)
            }
        }).catch((error)=>{
            toast.error(error.message)
        })
    }

  return (
    <div>
      <div class="container mt-3 col-8">
      <h4>Login Here</h4>
      <form onSubmit={handleLogin}>
      <div class="form-floating mb-3 mt-3">
        <input
          type="text"
          class="form-control shadow"
          name="email"
          id="formId1"
          placeholder=""
          value={userlogin.email}
          onChange={(e)=>setUserlogin({...userlogin,email:e.target.value})}
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
          value={userlogin.password}
          onChange={(e)=>setUserlogin({...userlogin,password:e.target.value})}
          required
        />
        <label for="formId1">Password</label>
      </div>
      <div class='d-grid'>
        <button class='btn btn-outline-primary shadow' type="submit">Login</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Login
