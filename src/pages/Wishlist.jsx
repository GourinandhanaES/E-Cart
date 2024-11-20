//rafce 
import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishListSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)

  const handlecart = (product)=>{
    dispatch(removeItem(product.id))
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id==product.id)
    if(existingProduct){
      alert("Product is incrementing in your wishlist!!!")
    }else{
      alert("Product Added to your wishlist")
    }
  }
  
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
      {
        userWishlist?.length>0?
        <>
    <h1 className="text-5xl font-bold text-orange-600 mb-4">My Wishlist</h1>
      <div className="grid grid-cols-4 gap-4">
        {
          userWishlist?.map(product=>(
            <div key={product?.id} className="rounded border p-2 shadow">
              <img width={'100%'} height={'200px'} src={product?.thumbnail}  alt="" />
              <div className="text-center">
                <h3 className="text-xl font-bold">{product?.title} </h3>
                <div className="flex justify-evenly mt-3">
                <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                <button onClick={()=>dispatch(handlecart(product))} className='text-xl'><i className="fa-solid fa-cart-plus text-green-700"></i></button>
            </div>
          </div>
        </div>
          ))
        }
      </div>
    </>
    :
    <div className="flex flex-col justify-center items-center">
      <img className='w-[620px]  h-1/2' src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" width={'500px'} alt="" />
      <h1 className='text-4xl text-red-600 mt-3'>Your Wishlist is Empty!!!!</h1>
    </div>
      }
    </div>
    </>
  )
}

export default Wishlist