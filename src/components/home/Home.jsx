import React from 'react'
import { Banner, BetalLeaf, EaseBooking, Extraordinary, HomeCTA, HomeProducts, HomeServices, Testimonials, ThrustFul } from './subComp'

const Home = () => {
  return (
    <>
      <div className=''>
      <Banner />
      {/* <BetalLeaf/>
      <Extraordinary/> */}
      {/* <HomeProducts/> */}
      {/* <Testimonials/> */}
      <HomeServices/>
      {/* <EaseBooking/> */}
      <HomeCTA/>
      {/* <ThrustFul/>  */}
      </div>
    </>

  )
}

export default Home