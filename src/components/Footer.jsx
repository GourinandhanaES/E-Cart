//rafce
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-violet-600 w-full p-5 text-white mt-20'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-3">
        
        <div>
          <Link className='text-2xl font-bold' to={'/'}>
            <i className="fa-solid fa-truck-fast me-1"></i> E Cart
          </Link>
          <p className='text-l mt-4'>
            Designed and built with all the love in the world by the Luminar team with the help of our contributors.
          </p>
          <p>Code licensed Luminar, docs CC BT 3.0.</p>
          <p>Currently v5.3.2</p>
        </div>
        
        <div className='mx-10'>
          <h1 className='text-2xl font-bold mb-4'>Links</h1>
          <ul>
            <li><a href="">Landing Page</a></li>
            <li><a href="">Home Page</a></li>
            <li><a href="">Watch History Page</a></li>
          </ul>
        </div>
        
        <div className=''>
          <h1 className='text-2xl font-bold mb-4'>Guides</h1>
          <ul>
            <li><a href="">React</a></li>
            <li><a href="">React Bootstrap</a></li>
            <li><a href="">React Router</a></li>
          </ul>
        </div>
        
        <div className=''>
          <h1 className='text-2xl font-bold mb-4'>Contact Us</h1>
          <div className='flex gap-3'>
            <input className='rounded p-2 text-black w-full' type="text" placeholder='Enter your email here' />
            <a href="">
              <i className="fa-solid fa-arrow-right mt-2"></i>
            </a>
          </div>
          <ul className='flex mt-4 gap-4 justify-evenly'>
            <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href=""><i className="fa-brands fa-github"></i></a></li>
            <li><a href=""><i className="fa-solid fa-phone"></i></a></li>
          </ul>
        </div>

      </div>
      
      <h1 className='text-white text-center mt-8'>
        Copyright &copy; Gourinandhana, E Cart. Built with React Redux
      </h1>
    </div>

    </>
  )
}

export default Footer