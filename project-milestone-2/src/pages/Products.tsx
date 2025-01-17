import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { ProductT } from './Home'
import { URL } from '../constants'
import Product from '../components/Product'

export type Category = {
  id: number,
  name: string,
  image: string
}

const Products = () => {
  const [categories, setCategories] = useState<Category[] | []>([])
  const [categoryId, setCategoryId] = useState(1)
  const getCategories = async () => {
    try {
      const response = await fetch(`${URL}/categories`)
      const result = await response.json()
      setCategories(result)

    } catch (error) {
      console.log(error)

    }

  }

  const [products, setProducts] = useState<ProductT[] | []>([])
  const getProducts = async (id: number) => {
    try {
      const response = await fetch(`${URL}/products/?categoryId=${id}`)
      const result = await response.json()
      setProducts(result)

    } catch (error) {
      console.log(error)

    }

  }

  useEffect(
    () => {
      getProducts(categoryId)
    },
    [categoryId]
  )

  useEffect(
    () => {
      getCategories()
    }, []
  )

  useEffect(
    () => {
      console.log('products', products)
    },
    [products]
  )

  useEffect(
    () => {
      console.log('categories', categories)
    },
    [categories]
  )


  return (

    <div className=''>
      <Navbar />
      <div className='grid grid-cols-2'>
        <div className=' p-2 '>{categories.map(
          (item) => {
            return (
             <div className='flex flex-col bg-emerald-100  '>
               <button onClick={() => {
                setCategoryId(item.id)
              }} className='m-2 bg-emerald-100 shadow hover:bg-black hover:text-white'> {item.name} </button>
             </div>
            )
          }
        )}</div>

        <div className='bg-emerald-100  rounded p-3 '>
          <Product data={products} />
        </div>

      </div>
    </div>
  )
}

export default Products
