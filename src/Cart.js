import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Cart() {

    useEffect(() => {
        toast("Welcome")
    })
    
  return (
    <div>
        <ToastContainer/>
        <h1>This is Cart Page</h1>
    </div>
  )
}

export default Cart
