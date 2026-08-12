import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Signup1 from './Signup1'
import Practice from './Practice'
import Login1 from './Login1'
import Cart from './Cart'
import ProductList from './ProductList'
import Calculator from './Calculator'
import About from './About'
import Sample from './Sample'
import Dummy from './Dummy'
import Animations from './Animations'


function App() {
  return (  
    <div>
      <Router>
        <Routes>
         <Route path='/loginpage' element= {<Login/>}/>
         <Route path='/signupage' element= {<Signup/>}/>
         <Route path='/dashboardpage' element= {<Dashboard/>}/>
         <Route path='/signup1page' element= {<Signup1/>}/>
         <Route path='/practicepage' element= {<Practice/>}/>
         <Route path='/login1page' element= {<Login1/>}/>
         <Route path='/cartpage' element= {<Cart/>}/>
         <Route path='/productlistpage' element= {<ProductList/>}/>
         <Route path='/calculatorpage' element={<Calculator/>}/>
         <Route path='/aboutpage' element={<About/>}/>
         <Route path='/sample' element={<Sample/>}/>
         <Route path='/dummypage' element={<Dummy/>}/>
         <Route path='/' element={<Animations/>}/>
       </Routes>
      </Router>
    </div>
  )
}

export default App