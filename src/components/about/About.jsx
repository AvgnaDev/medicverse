import React from 'react'
import aboutBanner from '../../assets/images/medical-about-bannerr.jpg'

const About = () => {
  return (
    <div>
      <div className='w-full h-[520px] bg-cover bg-fixed' style={{
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,.5),rgba(0,0,0,.2)),url(${aboutBanner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        {/* <div className='flex-center h-full'>
          <div className='text-center'>
            <p className='uppercase text-xl xs:text-2xl sm:text-3xl text-white mb-1'>About Us</p>
            <p className='uppercase text-center text-white'>Home / About</p>
          </div>
        </div> */}
        <div className="flex flex-col justify-center items-start h-full z-50 px-4 sm:px-8">
          <div className="w-full sm:w-[65%] box relative overflow-hidden px-2 py-8">
            <div className="py-4 text-center space-y-4">
              <h1 className='text-3xl xs:text-4xl md:text-7xl text-white uppercase font-bold tracking-[2px] drop-shadow-2xl'>About <span className="text-customGreen-full">Medicverse</span> </h1>
              <p className="text-white sm:w-[90%] mx-auto text-xl sm:text-2xl md:text-3xl">
                We're your one-stop digital platform for healthcare collaboration, enabling  experts discuss advancements and urgent cases.</p>
            </div>
          <div className='text-center flex-center'>
            <button className="button--action button mt-8 opacity-70 cursor-not-allowed">Watch video</button>
          </div>
          </div>
        </div>
      </div>
      {/* <div className='max-w-fullWidth mx-auto px-4 py-6'>
        <h3 className='text-center font-[600] mb-8'>Our Journey </h3>
        <p><span className='font-[600] underline decoration-1 decoration-green-400'>Our Journey</span> : Gupta's Paan, formerly known as Suresh Paan Bhandar, was created with the intention of improving the paans' experience and elevating its reputation. Since 1988, Gupta Paan Palace has faithfully stood next to Mother Daily in Sector 19, Block A, Noida, serving any passerby who happens to be in the vicinity.</p>
        <p>With our deliciousness, mouthwatering paans like Chocolate, Kesar, Fire, and Bubble Gum have gained a place in many hearts. Additionally, Ice Paan is one of the city's best frozen paans, so everyone ought to be eager to try it! However, believe us when we state that this paan is among the greatest frozen paans available for you to taste in the city.</p>
      </div> */}

    </div>
  )
}

export default About