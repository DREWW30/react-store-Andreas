import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
