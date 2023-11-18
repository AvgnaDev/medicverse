import React from 'react'
import medicalNetwork from '../../../assets/images/medical-networking.jpg'
import medicalJobs from '../../../assets/images/medical-jobs.jpg'
import medicalCases from '../../../assets/images/medical-cases.jpg'
import medicalMarking from '../../../assets/images/medical-marking.jpg'
import { Link } from 'react-router-dom'

const HomeServices = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-fullWidth mx-auto px-4 py-8'>
                <div className='text-center'>
                    <h3 className='text-xl xs:text-3xl sm:text-4xl md:w-3/5 mx-auto text-center font-[600] pt-4 my-2 '>MedicVerse Services</h3>
                </div>
                <div>
                    <div className='text-center'>
                        <span className='py-1 px-2 text-customGreen-900 text-xl rounded'>Click on images to learn more</span>
                    </div>
                    <div className='flex justify-around flex-wrap py-8 gap-8 sm:gap-6'>
                        <div className='rounded group overflow-hidden xs:w-[70%] sm:w-1/2 md:w-[40%] lg:w-[30%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
                            <div className='flex-between flex-col h-full rounded'>
                                <img className='rounded h-full' src={medicalNetwork} alt='medical-networking' />
                                {/* <div className='p-4 space-y-1'>
                                    <h6 className='font-[600]'>Networking</h6>
                                    <p> Connect and grow your network with fellow healthcare professionals and stakeholders.</p>
                                </div> */}
                                <Link to='/services'>
                                    <div className="rounded text-center p-6 transition-all duration-700 absolute top-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
                                        <p className="text-center py-2 text-2xl flex justify-center items-center h-full tracking-wider">
                                        Networking
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className='rounded group overflow-hidden xs:w-[70%] sm:w-1/2 md:w-[40%] lg:w-[30%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
                            <div className='flex-between flex-col h-full rounded'>
                                <img className='rounded-t h-full' src={medicalCases} alt='medical-cases' />
                                {/* <div className='p-4 space-y-1'>
                                    <h6 className='font-[600]'>Medical cases</h6>
                                    <p>Post unusual medical cases seeking immediate skilled medical consultation within community.</p>
                                </div> */}
                                 <Link to='/services'>
                                    <div className="rounded text-center p-6 transition-all duration-700 absolute top-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
                                        <p className="text-center py-2 text-2xl flex justify-center items-center h-full tracking-wider">
                                        Medical cases
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className='rounded group overflow-hidden xs:w-[70%] sm:w-1/2 md:w-[40%] lg:w-[30%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
                            <div className='flex-between flex-col'>
                                <img className='rounded-t h-full' src={medicalJobs} alt='medical-jobs' />
                                {/* <div className='p-4 space-y-1'>
                                    <h6 className='font-[600]'>Jobs</h6>
                                    <p>Find jobs in healthcare contributing to the cause of healthy community.</p>
                                </div> */}
                                 <Link to='/services'>
                                    <div className="rounded text-center p-6 transition-all duration-700 absolute top-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
                                        <p className="text-center py-2 text-2xl flex justify-center items-center h-full tracking-wider">
                                        Jobs
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className='rounded group overflow-hidden xs:w-[70%] sm:w-1/2 md:w-[40%] lg:w-[30%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
                            <div className='flex-between flex-col'>
                                <img className='rounded-t h-full' src={medicalMarking} alt='medical-marketing' />
                                {/* <div className='p-4 space-y-1'>
                                    <h6 className='font-[600]'>Marketplace</h6>
                                    <p>Healthcare marketplace for all your urgent medical supplies need.</p>
                                </div> */}
                                  <Link to='/services'>
                                    <div className="rounded text-center p-6 transition-all duration-700 absolute top-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
                                        <p className="text-center py-2 text-2xl flex justify-center items-center h-full tracking-wider">
                                        Marketplace
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='text-center'>
                    <button className='button button--action'>Explore more</button>
                </div> */}
            </div>
        </div>
    )
}

export default HomeServices