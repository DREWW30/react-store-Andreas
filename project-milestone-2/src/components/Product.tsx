import React from 'react'
import { ProductT } from '../pages/Home'
import { useNavigate } from 'react-router'


type Props = {
  data: ProductT[]
}
const Product = (props: Props) => {
  const navigate = useNavigate()


  return (
    <div className=''>
      {props.data.map((item) => {
        return (
          <div className=' hover:bg-emerald-200 p-2 grid justify-items-center '>
            
            <p className='text-lg font-semibold text-gray-800 hover:text-gray-900 p-2'>{item.title}</p>
            <img src={item.images[0]} alt={item.title} width='250px' className='rounded' />
            <p className='mt-4 flex items-center justify-between font-bold text-base'>${item.price}</p>
            <p className='mt-2 text-gray-600 text-sm line-clamp-2'>{item.description}</p>
            

            <button onClick={() => {
              navigate(`/products/${item.id}`);
            }} className='m-3 bg-white hover:bg-black hover:text-white'>See details</button>
          </div>
        )
      })}
    </div>
  )
}

export default Product
