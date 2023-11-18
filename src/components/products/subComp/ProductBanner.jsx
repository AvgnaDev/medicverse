import React from 'react'
import aboutBanner from '../../../assets/images/about-banner.png'


const ProductBanner = () => {
  return (
    <div>
        <div className='w-full h-[250px] bg-cover' style={{
        backgroundImage: `linear-gradient(312deg, rgba(0,0,0,.3),rgba(0,0,0,.7)),url(${aboutBanner})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='flex-center h-full'>
          <div className='text-center'>
            <p className='uppercase text-xl xs:text-2xl sm:text-3xl text-white mb-1'>Products</p>
            <p className='uppercase text-center text-white'>Home / Product</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBanner