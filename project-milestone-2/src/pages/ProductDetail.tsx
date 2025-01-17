import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { ProductT } from './Home'
import { URL } from '../constants'
import Navbar from '../components/Navbar'




const ProductDetail = () => {
    const navigate = useNavigate()
    const params = useParams()
    console.log('params', params)

    const [productDetail, setProductDetail] = useState<ProductT | null>(null)
    const getProductDetail = async () => {
        try {
            const response = await fetch(`${URL}/products/${params.productId}`)
            const result = await response.json()
            setProductDetail(result)

        } catch (error) {
            console.log(error)

        }

    }

    useEffect(
        () => {
            getProductDetail()
        },
        []
    )

    useEffect(
        () => {
            console.log('productDetail', productDetail)
        },
        [productDetail]
    )



    return (
        <>
            <Navbar />
            <div className='border-2 border-black p-2 bg-emerald-100 grid justify-items-center'>
                <p className='text-lg font-semibold text-gray-800 hover:text-gray-900'>{productDetail?.title}</p>
                <img src={productDetail?.images[0]} alt={productDetail?.title} width='200px' />
                <p className='mt-4 flex items-center justify-between'>${productDetail?.price}</p>
                <p className='mt-2 text-gray-600 text-sm line-clamp-2'>{productDetail?.description}</p>

                <button onClick={() => {
                    navigate(-1);
                }} className='m-5'>Back</button>
            </div>

        </>
    )
}

export default ProductDetail
