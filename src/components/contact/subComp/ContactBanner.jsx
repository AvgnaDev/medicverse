import React from 'react'
import contactBanner from '../../../assets/images/contact-banner.jpg'

const ContactBanner = () => {
    return (
        <div className='' >
            <div className='w-full h-[250px] bg-cover' style={{
                backgroundImage: `linear-gradient(312deg, rgba(0,0,0,.3),rgba(0,0,0,.3)),url(${contactBanner})`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='flex-center h-full'>
                    <div className='text-center'>
                        <p className='uppercase text-xl xs:text-2xl sm:text-3xl text-white mb-1'>Contact</p>
                        <p className='uppercase text-center text-white'>Home / Contact</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner