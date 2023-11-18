import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as GiIcons from 'react-icons/gi'
import * as LiaIcons from 'react-icons/lia'
import * as RxIcons from 'react-icons/rx'

const ThrustFul = () => {
    return (
        <div>
            <div className='justify-center space-y-3 xs:flex-between p-6 bg-green-300 text-center text-gray-700'>
                <div className='xs:w-1/2 sm:w-[30%] md:w-1/4'>
                    <p className='flex-center text-4xl'><GiIcons.GiReturnArrow /></p>
                    <p className='text-xl font-[600]'>Truthful Verified Returns</p>
                    <span>Truthful Verified returns</span>
                </div>
                <div className='xs:w-1/2 sm:w-[30%] md:w-1/4'>
                    <p className='flex-center text-4xl'><LiaIcons.LiaShippingFastSolid /></p>
                    <p className='text-xl font-[600]'>Trusted Shipping</p>
                    <span>Trusted delivery</span>
                </div>
                <div className='xs:w-1/2 sm:w-[30%] md:w-1/4'>
                    <p className='flex-center text-4xl'><MdIcons.MdOutlineSecurity /></p>
                    <p className='text-xl font-[600]'>Secured Shopping</p>
                    <span>Secured Shopping</span>
                </div>
                <div className='xs:w-1/2 sm:w-[30%] md:w-1/4'>
                    <p className='flex-center text-4xl'><RxIcons.RxCube /></p>
                    <p className='text-xl font-[600]'>Quality Products</p>
                    <span>Quality Products</span>
                </div>

            </div>
        </div>
    )
}

export default ThrustFul