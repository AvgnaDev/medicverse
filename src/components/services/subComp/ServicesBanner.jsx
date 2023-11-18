import React from 'react'
import serviceBanner from '../../../assets/images/medical-services-banner.jpg'
import servicesHighlight from '../../../assets/images/services-paan.png'

const ServicesBanner = () => {
  return (
    <div>
        <div className='w-full h-[520px] bg-cover bg-fixed' style={{
        backgroundImage: `linear-gradient(312deg, rgba(0,0,0,.3),rgba(0,0,0,.7)),url(${serviceBanner})`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:"cover"
      }}>
        {/* <div className='flex-center h-full'>
          <div className='text-center'>
            <p className='uppercase text-xl xs:text-2xl sm:text-3xl text-white mb-1'>Services</p>
            <p className='uppercase text-center text-white'>Home / Services</p>
          </div>
        </div> */}
         <div className="flex flex-col justify-center items-start h-full z-50">
         <div className="w-full mx-auto sm:w-[65%] sm:mx-0 relative overflow-hidden px-3 py-8">
              <div className="py-4">
                {/* <h1 className='text-3xl xs:text-4xl md:text-7xl text-white uppercase font-bold tracking-[2px] drop-shadow-2xl'>About <span className="text-[#00c7d4]">Avgna</span> </h1> */}
                <p className="text-white sm:w-[90%] mx-auto text-[23px] sm:text-2xl md:text-3xl">
                Become a collaborator and a facilitator, helping advance healthcare and finding solutions within the community.</p>
              </div>
            {/* <button className="button--action button z-10 mt-8">Watch video</button> */}
            </div>
          </div>
      </div>
      {/* <div className='max-w-fullWidth mx-auto px-4 py-8'>
        <h3 className='text-xl xs:text-3xl sm:text-4xl md:w-2/5 mx-auto text-center font-[600] mb-6'>Our exciting services to cater your needs</h3>
        <p className='mb-8'><span className='font-[600] underline decoration-1 decoration-green-400'>Our Journey</span> : We provide best catering to address your paan needs in various occasions like marriages, parties etc . We meet the requirements as per the needs of the client’s. </p>
        <img src={servicesHighlight} alt='services-paan' className='w-1/4 mx-auto'/>
      </div> */}

    </div>
  )
}

export default ServicesBanner