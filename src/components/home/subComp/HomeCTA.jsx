import React from 'react'
import iosDownload from '../../../assets/images/ios-download.png'

const HomeCTA = () => {
  return (
    <div className='space-y-6 p-6 bg-customGreen-50 text-center text-gray-700'>
            <h3 className='text-xl sm:text-3xl font-[600] sm:w-[75%] mx-auto'>Download MedicVerse from App Store to start creating your healthcare network</h3>
            {/* <p>Good maintenance is vital, no matter what kind of maintenance we’re talking about. That’s why Annual Maintenance Contracts (AMCs) are so popular and so important. When a business has these in place, they know for sure that their maintenance needs will be taken care of during the year ahead. That can apply to Software maintenance or IT hardware maintenance, as well as everything else in between.</p> */}
            {/* <button className='button button--action'>Call us now</button> */}

            <div className='flex-center'>
              <img src={iosDownload} className='w-[150px] rounded cursor-pointer'/>
            </div>
        </div>
  )
}

export default HomeCTA