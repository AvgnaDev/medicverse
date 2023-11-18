import React from 'react'
import { NavLink } from 'react-router-dom'
import iosDownload from '../../../assets/images/ios-download.png'


const MobileDrawer = ({ openDrawer }) => {
  return (
    <div>
      <div className='bg-black/70 fixed inset-0 w-full'></div>
      <div className='w-64 fixed inset-0 h-full bg-white px-4 py-12'>
        <div onClick={() => { openDrawer(false) }} className='absolute right-4 text-2xl top-4 w-full cursor-pointer text-right py-1'>X</div>
        <ul className='md:hidden space-y-6'>
          <li onClick={() => { openDrawer(false) }}><NavLink to='/' className={({ isActive }) => `${isActive ? "text-customGreen-full text-xl block" : "text-gray-500 text-xl hover:text-customGreen-600 block"}`}>Home</NavLink></li>
          <li onClick={() => { openDrawer(false) }}><NavLink to='aboutus' className={({ isActive }) => `${isActive ? "text-customGreen-full text-xl block" : "text-gray-500 text-xl hover:text-customGreen-600 block"}`}>About Us</NavLink></li>
          {/* <li><NavLink to='products' className={({ isActive }) => `${isActive ? "text-green-500" : "text-gray-400 hover:text-green-400"}`}>Products</NavLink></li> */}
          <li onClick={() => { openDrawer(false) }}><NavLink to='services' className={({ isActive }) => `${isActive ? "text-customGreen-full text-xl block" : "text-gray-500 text-xl hover:text-customGreen-600 block"}`}>Services</NavLink></li>
          <li onClick={() => { openDrawer(false) }}><NavLink to='contactus' className={({ isActive }) => `${isActive ? "text-customGreen-full text-xl block" : "text-gray-500 text-xl hover:text-customGreen-600 block"}`}>Contact Us</NavLink></li>
          {/* <button className='button button--action'>Shop Now</button> */}
          <div className='pt-8'>
            <img src={iosDownload} className='w-[125px] rounded cursor-pointer mt-12' />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default MobileDrawer