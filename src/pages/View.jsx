//rafce
import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWhishlist } from '../redux/slices/wishListSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const [product,setProducts]=useState({})
  const {id}=useParams()
  // console.log(id);
  // console.log(product);

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      setProducts(allProducts.find(item=>item.id==id))
    }
  },[])

  const handleWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item?.id==id)
    if(existingProduct){
      alert("Product already in your wishlist!!!")
    }else{
      alert("Product Added to your wishlist")
      dispatch(addToWhishlist(product))
    }
  }

  const handlecart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id==id)
    if(existingProduct){
      alert("Product already in your wishlist!!!")
    }else{
      alert("Product Added to your wishlist")
    }
  }
  return (
    <>
    <Header/>
    <>
    <div className='flex flex-col mx-5'>
    <div className="grid grid-cols-2 items-center h-screen">
      <div>
         <img width={'350px'} height={'250px'} src={product?.thumbnail} alt="" />
        <div className="flex justify-around mt-5">
        <button onClick={handleWishlist} className='bg-blue-700 text-white text-l rounded p-2'>ADD TO WISHLIST</button>
        <button onClick={handlecart} className='bg-green-700 text-white text-l rounded p-2'>ADD TO CART</button>
        </div>
      </div>
      <div className='mt-20'>
        <p className='text-gray-800 font-bold'>PID: {product?.id}</p>
        <h1 className='text-5xl font-bold'>{product?.title}</h1>
        <p className='text-red-600 text-2xl font-bold'>{product?.price}</p>
        <p>Brand : {product?.brand}</p>
        <p>Category : {product?.category}</p>
        <p> <span className='font-bold'>Description : </span> {product?.description}</p>
        <h3 className='font-bold mt-4'>Client Review</h3>
      {
        product?.reviews?.length>0?
        product?.reviews?.map(item=>(
         <div key={item.date} className="shadow border rounded p-3 mb-2">
          <h5>
            <span className='font-bold'>{item?.reviewerName}</span>: <span>{item?.comment}</span>
          </h5>
          <p>Rating:{item?.rating} <i className='fa-solid fa-star text-yellow-400'></i></p>
         </div>
        ))
        :
        <div className="font-bold text-red-600">No Reviews yet!!!</div>
      }
      </div>
    </div>
    </div>
    </>
    </>
  )
}

export default View