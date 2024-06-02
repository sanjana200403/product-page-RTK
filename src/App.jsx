import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
      
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/cart' element={<Cart/>} />

    </Routes>
    </BrowserRouter>
  
    </div>
  )
}

export default App
