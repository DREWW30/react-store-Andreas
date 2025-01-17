import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='font-bold  bg-white p-1 m-2 sticky top-0 z-50 '>
      <h1>D'Shop</h1><br />
      <button onClick={() => {
        navigate('/');
      }} className='m-3  bg-white hover:bg-black hover:text-white'>Home</button>

      <button onClick={() => {
        navigate('/products');
      }}  className='m-3  bg-white hover:bg-black hover:text-white'>Product</button>

      <button onClick={() => {
        navigate('/login');
      }}  className='m-3  bg-white hover:bg-black hover:text-white'>Login</button>

      <button onClick={() => {
        navigate('/cart');
      }}  className='m-3 bg-white hover:bg-black hover:text-white'>Cart</button>
    </div>
  )
}

export default Navbar

