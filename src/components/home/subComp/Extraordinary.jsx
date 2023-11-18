import React from 'react'

const Extraordinary = () => {
    return (
        <div className='max-w-fullWidth mx-auto px-4 bg-green-200 py-4'>
            <h3 className='text-xl xs:text-3xl sm:text-4xl md:w-3/5 mx-auto text-center font-[600] py-4'>Wide range of authentic PAAN flavors</h3>
            <div className='flex-center'>
                <div className='w-1/2 px-4'>
                    <marquee direction="up" scrollamount="4">
                    <div className='px-2 py-4 space-y-4 h-[350px]'>
                        <div className='flex-center gap-4 bg-white rounded p-4'>
                            <div className=''>icon</div>
                            <div className='flex-1'>
                                <p className='font-[600]'>Saada Paan's</p>
                                <p className='para'>This paan includes the authentic flavors of orignal paan with our love filled in it.</p>
                            </div>
                        </div>
                      
                       
                        <div className='flex-center gap-4 bg-white rounded p-4'>
                            <div className=''>icon</div>
                            <div className='flex-1'>
                                <p className='font-[600]'>Flavoured Paan's </p>
                                <p className='para'>We also serve various flavored paan varities like Meeta, Chocolate, Magahi, Ice, Butterscotch etc.</p>
                            </div>
                        </div>
                      
                        <div className='flex-center gap-4 bg-white rounded p-4'>
                            <div className=''>icon</div>
                            <div className='flex-1'>
                                <p className='font-[600]'>Special Paan's</p>
                                <p className='para'>Giving the modern touch to paan adding specialities like Fire paan & Kesar Paan.</p>
                            </div>
                        </div>
                       
                        <div className='flex-center gap-4 bg-white rounded p-4'>
                            <div className=''>icon</div>
                            <div className='flex-1'>
                                <p className='font-[600]'>Special Paan's</p>
                                <p className='para'>Giving the modern touch to paan adding specialities like Fire paan & Kesar Paan.</p>
                            </div>
                        </div>
                        <div className='flex-center gap-4 bg-white rounded p-4'>
                            <div className=''>icon</div>
                            <div className='flex-1'>
                                <p className='font-[600]'>Special Paan's</p>
                                <p className='para'>Giving the modern touch to paan adding specialities like Fire paan & Kesar Paan.</p>
                            </div>
                        </div>
                    </div>
                    </marquee>
                </div>

                <div className='w-1/2 border'>right</div>
            </div>
        </div>
    )
}

export default Extraordinary