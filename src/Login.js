import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'

function Login() {


  return (
    <div>
      <Header/>
        <h1>This is Login Page</h1>
        <input type='text' placeholder='Enter ur username'/><br/>
      <Footer/>
    </div>
  )
}

export default Login