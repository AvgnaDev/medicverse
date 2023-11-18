import React from 'react'

const HomeProducts = () => {
  return (
    <div className='max-w-fullWidth mx-auto px-4 py-8'>
        <div>
            <p className='para text-center'>Products</p>
        </div>
        <div>
            <h3 className='text-xl xs:text-3xl sm:text-4xl md:w-[44%] mx-auto text-center font-[600] '>We are here to give you The Best Herbal Products</h3>
            <div className='flex-center gap-4 py-8'>
                <div className='w-[23%] relative overflow-hidden group'>
                    <img className='rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJCjIqg5NcSlyNEozxLNpMaaN8vgPoee80w&usqp=CAU' alt='meetha-paan'/>
                    <div className='absolute group-hover:translate-y-0 transition-all inset-0 w-full h-full bg-black/50 rounded translate-y-full p-4'>
                        <div className='flex-between h-full flex-col py-4'>
                            <p className='para flex-center text-white'>product 1</p>
                            <div className='flex-between w-full px-4'>
                                <p className='font-[600] text-white'>$ 100</p>
                                <button className='button button--action'>Add</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[23%] relative overflow-hidden group'>
                    <img className='rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJCjIqg5NcSlyNEozxLNpMaaN8vgPoee80w&usqp=CAU' alt='meetha-paan'/>
                    <div className='absolute group-hover:translate-y-0 transition-all inset-0 w-full h-full bg-black/50 rounded translate-y-full p-4'>
                    <div className='flex-between h-full flex-col py-4'>
                            <p className='para flex-center text-white'>product 2</p>
                            <div className='flex-between w-full px-4'>
                                <p className='font-[600] text-white'>$ 100</p>
                                <button className='button button--action'>Add</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[23%] relative overflow-hidden group'>
                    <img className='rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJCjIqg5NcSlyNEozxLNpMaaN8vgPoee80w&usqp=CAU' alt='meetha-paan'/>
                    <div className='absolute group-hover:translate-y-0 transition-all inset-0 w-full h-full bg-black/50 rounded translate-y-full p-4'>
                    <div className='flex-between h-full flex-col py-4'>
                            <p className='para flex-center text-white'>product 3</p>
                            <div className='flex-between w-full px-4'>
                                <p className='font-[600] text-white'>$ 100</p>
                                <button className='button button--action'>Add</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[23%] relative overflow-hidden group'>
                    <img className='rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJCjIqg5NcSlyNEozxLNpMaaN8vgPoee80w&usqp=CAU' alt='meetha-paan'/>
                    <div className='absolute group-hover:translate-y-0 transition-all inset-0 w-full h-full bg-black/50 rounded translate-y-full p-4'>
                    <div className='flex-between h-full flex-col py-4'>
                            <p className='para flex-center text-white'>product 4</p>
                            <div className='flex-between w-full px-4'>
                                <p className='font-[600] text-white'>$ 100</p>
                                <button className='button button--action'>Add</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
        <div className='text-center'>
            <button className='button button--action'>Explore more</button>
        </div>
    </div>
  )
}

export default HomeProducts