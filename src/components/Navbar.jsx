import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const selector = useSelector((state)=>state.cart)
  return (
    <div className='nav'>
    <span className='logo'>REDUX STORE</span>
    <div className="nav-link">
        <Link to="/">Home</Link>
       
        <Link to="/cart">Cart</Link>
    </div>
  
       
      
       
        <span className='cartCount'>
            Cart : item {selector.length}

        </span>
   
    </div>
  )
}

export default Navbar
