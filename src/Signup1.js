import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Signup1() {

    const[fname , setFname] = useState('')
    const[lname , setLname] = useState('')
    const[uname , setUname] = useState('')
    const[pass , setPass] = useState('')
    const handleSignup = (e) => {

        e.preventDefault()        

        if(fname == '' || lname == '' || uname == '' || pass == ''){
            toast.error("Please fill in all fields");  
        }else{
            localStorage.setItem("Username" , uname)
            localStorage.setItem("Password" , pass)
            toast.success("Signup successfull");

            setTimeout(() => {
            window.location.href = "/login1page"
            }, 5000)
            
        }
    }
    

  return (
    <div>
        <ToastContainer/>
        <h1>Signup Page</h1>

        <form onSubmit={handleSignup}>
        <input type='text' placeholder='Enter ur first name' value={fname} onChange={(e)=>setFname(e.target.value)}/><br/>
        <input type='text' placeholder='Enter ur last name' value={lname} onChange={(e)=>setLname(e.target.value)}/><br/>
        <input type='text' placeholder='Enter ur user name' value={uname} onChange={(e)=>setUname(e.target.value)}/><br/>
        <input type='password' placeholder='Enter ur password' value={pass} onChange={(e)=>setPass(e.target.value)}/><br/>
        <button type='submit'>Signup</button>
        </form>
    </div>
    
    
  )
}

export default Signup1