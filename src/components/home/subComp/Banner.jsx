import React from 'react'
import homeBanner from '../../../assets/images/medical-home-banner.jpg'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div
        className="mx-auto bg-no-repeat relative z-20 w-full h-full"
        style={{
          background: `linear-gradient(312deg, rgba(51, 185, 96, 0.0) 3% , rgba(51, 185, 96, 0.0) 2%) , url(${homeBanner}) `,
          backgroundAttachment: 'fixed',
          backgroundPosition:'center center',
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
        }}
      >

        <div className='flex-end h-screen'>
          <div className='flex-end flex-1 h-full relative z-50' style={{ background: 'linear-gradient(312deg, rgba(51, 185, 96, 0.5) 66% , transparent 50%)' }}>
            <div className='md:w-[80%] lg:w-[55%] flex-start h-full p-3 sm:p-6'>
              <div className='flex-center w-full'>
                <div className='font-[300] px-1 sm:px-0'>
                  {/* <span className='uppercase text-xl text-green-600 font-[600] py-1 px-2 rounded bg-green-200'>Partnerships for Health</span> */}
                  <h2 className='text-2xl xs:text-5xl font-[600] mt-6'>A digital platform for</h2>
                  <h2 className='text-2xl xs:text-5xl font-[600] mt-2'>connecting healthcare</h2>
                  <div className='my-5'>
                    <p className='text-[17px] xs:text-2xl'>We connect medical professionals and enthusiasts to support the overarching healthcare cause.   </p>
                    {/* <p className='text-xl'>Tradition of <span className='text-green-600'>PAAN</span></p> */}
                  </div>
                  {/* <p className='decoration-green-600 underline '>Now Delivered at your <span className='decoration-green-600 decoration-double underline'>Doorstep</span></p> */}
                  <button onClick={()=>{navigate('/aboutus')}} className='my-4 button button--action text-xl font-[500]'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner