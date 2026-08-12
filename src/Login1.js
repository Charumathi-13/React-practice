import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Login1() {
    const [loginUsername ,  setLoginUsername] = useState('')
    const [loginPassword ,  setLoginPassword] = useState('')

    const[signupUsername , setSignupUsername] = useState(localStorage.getItem("Username"))
    const[signupPassword , setSignupPassword] = useState(localStorage.getItem("Password"))

    const handleLogin = (e) => {
        e.preventDefault()

        if(loginUsername == '' || loginPassword == ''){
            toast.error("Please fill in all fields")
        }else if(signupUsername == loginUsername && signupPassword == loginPassword){
            toast.success("Login successfull")
        }else{
            toast.warn("Invalid creds")
        }
    }
  return (
    <div>
        <ToastContainer/>

        <h1>This is Login Page</h1>

        <form onSubmit={handleLogin}>
            <input type='text' placeholder='Enter ur Username' value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}/>
            <input type='password' placeholder='Enter ur Password' value={loginPassword} onChange={(e) =>  setLoginPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login1