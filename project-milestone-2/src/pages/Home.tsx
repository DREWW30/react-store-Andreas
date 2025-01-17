import React, { useEffect, useState } from 'react'
import { URL } from '../constants'
import Product from '../components/Product'
import Navbar from '../components/Navbar'



export type ProductT = {
    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
    creationAt: string,
    updatedAt: string,
    category: {
        id: number,
        name: string,
        image: string,
        creationAt: string,
        updatedAt: string
    }

}


const Home = () => {
    const [products, setProducts] = useState<ProductT[] | []>([])
    const getProducts = async () => {
        try {
            const response = await fetch(`${URL}/products`)
            const result = await response.json()
            setProducts(result)

        } catch (error) {
            console.log(error)

        }

    }

    useEffect(
        () => {
            getProducts()
        },
        []
    )

    useEffect(
        () => {
            console.log('products', products)
        },
        [products]
    )

    return (
        <div>
      <Navbar/>

            <div className=' '>
            <div className=' bg-emerald-100 font-bold text-xl justify-center p-10 sticky top-0 shadow-md'>
                This our avaliable products
            </div>

            <div className='bg-emerald-100'>
                <Product data={products} />
            </div>
            </div>
        </div>
    )
}

export default Home
