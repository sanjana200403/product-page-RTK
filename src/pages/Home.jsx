import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='heading'>
     <h2 style={{textAlign:"center",margin:"30px"}}>  Welcome to the redux toolkit Store    </h2> 
     <section>
        <h3 style={{textAlign:"center"}}>Products</h3>
        <Products/>

     </section>
    </div>
  )
}

export default Home
