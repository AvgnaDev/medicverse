import React from 'react'

const EaseBooking = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-fullWidth mx-auto py-8'>
                <h3 className='text-2xl xs:text-3xl sm:text-4xl md:w-3/5 mx-auto text-center font-[600]'>Ease of booking our services </h3>
                <div className='px-3 sm:px-2 py-8 flex justify-between flex-wrap gap-4'>
                    <div className='sm:w-[30%] flex-center gap-4 bg-customGreen-300 rounded p-4 group'>
                        <div className=''>
                            <span className="before:block before:absolute before:-inset-1 relative inline-flex">
                                <span className="relative text-gray-500 text-7xl font-bold group-hover:-translate-y-8 transition duration-300">1</span>
                            </span>
                        </div>
                        <div className='flex-1'>
                            <p className='font-[600]'>Consult with our team</p>
                            <p className='para'>Reach out to our team at +91 123-xxx-xxx with your requirements.</p>
                        </div>
                    </div>
                    <div className='sm:w-[30%] flex-center gap-4 bg-customGreen-400 rounded p-4 group'>
                        <div className=''> <span className="before:block before:absolute before:-inset-1 relative inline-flex">
                            <span className="relative text-gray-500 text-7xl font-bold group-hover:-translate-y-8 transition duration-300">2</span>
                        </span></div>
                        <div className='flex-1'>
                            <p className='font-[600]'>Booking your appointments</p>
                            <p className='para'>Our team will book an appointment to finalise your menu and pricing. </p>
                        </div>
                    </div>
                    <div className='sm:w-[30%] flex-center gap-4 bg-customGreen-600 rounded p-4 group'>
                        <div className=''>
                            <span className="before:block before:absolute before:-inset-1 relative inline-flex">
                                <span className="relative text-gray-600 text-7xl font-bold group-hover:-translate-y-8 transition duration-300">3</span>
                            </span>
                        </div>
                        <div className='flex-1'>
                            <p className='font-[600]'>Enjoy your event</p>
                            <p className='para'>We take care of your arrangements & you can enjoy occasion with your loved once.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EaseBooking