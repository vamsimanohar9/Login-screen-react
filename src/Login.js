import React,{useState} from 'react'
import './Login.css'

function Login({Loggin,error}) {
    const [details,setDetails]=useState({email:'',password:''})

    const submitHandler = e =>{
        e.preventDefault();

        Loggin(details)
    }
    return (
        <div>
    <div class="login-page">
  <div class="form">
    <form onSubmit={submitHandler} class="login-form">
      <input type="text" placeholder="Email" id='email' onChange={e => setDetails({...details,email:e.target.value})} value={details.email}/>
      <input type="password" placeholder="Password" id='password' onChange={e => setDetails({...details,password:e.target.value})} value={details.password}/>
      <button>login</button>
      
    </form>
  </div>
</div>
        </div>
    )
}

export default Login
