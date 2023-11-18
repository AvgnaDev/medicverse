import React from 'react'
import medicalNetwork from '../../../assets/images/medical-services-network.jpeg'
import medicalJobs from '../../../assets/images/medical-services-jobs.jpeg'
import medicalCases from '../../../assets/images/medical-services-case.jpeg'
import medicalMarking from '../../../assets/images/medical-services-marketplace.jpeg'

const ServicesLists = () => {
    return (
        // <div className='max-w-fullWidth mx-auto px-8'>
        //     <div className='space-y-3 py-12'>
        //         <div className='flex-col space-y-12 '>
        //             <div className='flex-center flex-col lg:flex-row gap-10 md:px-8 lg:px-0'>
        //                 <img className='lg:w-2/5 h-[300px] rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFzsAxHIAUEq-XySW_-4ItkcEpunmO3uXeg&usqp=CAU' />
        //                 <div className='lg:w-1/2  flex-1 space-y-2'>
        //                     <p className='text-xl font-[600]'>Test 1</p>
        //                     <p className='text-400 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident recusandae eos distinctio molestias porro accusantium soluta non sed, dolores repellendus ullam iste nam quisquam, libero, delectus animi. Sed quia a, qui explicabo itaque aliquam repudiandae iure sint eum nemo id nostrum doloribus accusantium iste consequatur praesentium laboriosam voluptatibus! Tempore perferendis nemo doloremque repellat dignissimos repellendus voluptatem nihil quam enim debitis voluptas inventore atque earum iusto, quo pariatur vero laboriosam consequatur voluptate adipisci mollitia. Porro quas, odit pariatur minus eos obcaecati? Quae minima in facere eligendi, placeat, magnam, fuga laborum amet consectetur quis quasi eum enim animi doloribus accusamus perferendis suscipit.</p>
        //                 </div>
        //             </div>
        //             <div className='flex-center flex-col gap-10 md:px-8 lg:px-0 md:flex-row-reverse'>
        //                 <img className='lg:w-2/5 h-[300px] rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFzsAxHIAUEq-XySW_-4ItkcEpunmO3uXeg&usqp=CAU' />
        //                 <div className='lg:w-1/2  flex-1 space-y-2'>
        //                     <p className='text-xl font-[600]'>Test 1</p>
        //                     <p className='text-400 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident recusandae eos distinctio molestias porro accusantium soluta non sed, dolores repellendus ullam iste nam quisquam, libero, delectus animi. Sed quia a, qui explicabo itaque aliquam repudiandae iure sint eum nemo id nostrum doloribus accusantium iste consequatur praesentium laboriosam voluptatibus! Tempore perferendis nemo doloremque repellat dignissimos repellendus voluptatem nihil quam enim debitis voluptas inventore atque earum iusto, quo pariatur vero laboriosam consequatur voluptate adipisci mollitia. Porro quas, odit pariatur minus eos obcaecati? Quae minima in facere eligendi, placeat, magnam, fuga laborum amet consectetur quis quasi eum enim animi doloribus accusamus perferendis suscipit.</p>
        //                 </div>
        //             </div>
        //             <div className='flex-center flex-col lg:flex-row gap-10 md:px-8 lg:px-0'>
        //                 <img className='lg:w-2/5 h-[300px] rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFzsAxHIAUEq-XySW_-4ItkcEpunmO3uXeg&usqp=CAU' />
        //                 <div className='lg:w-1/2  flex-1 space-y-2'>
        //                     <p className='text-xl font-[600]'>Test 1</p>
        //                     <p className='text-400 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident recusandae eos distinctio molestias porro accusantium soluta non sed, dolores repellendus ullam iste nam quisquam, libero, delectus animi. Sed quia a, qui explicabo itaque aliquam repudiandae iure sint eum nemo id nostrum doloribus accusantium iste consequatur praesentium laboriosam voluptatibus! Tempore perferendis nemo doloremque repellat dignissimos repellendus voluptatem nihil quam enim debitis voluptas inventore atque earum iusto, quo pariatur vero laboriosam consequatur voluptate adipisci mollitia. Porro quas, odit pariatur minus eos obcaecati? Quae minima in facere eligendi, placeat, magnam, fuga laborum amet consectetur quis quasi eum enim animi doloribus accusamus perferendis suscipit.</p>
        //                 </div>
        //             </div>
        //             <div className='flex-center gap-10 md:px-8 lg:px-0 md:flex-row-reverse'>
        //                 <img className='lg:w-2/5 h-[300px] rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFzsAxHIAUEq-XySW_-4ItkcEpunmO3uXeg&usqp=CAU' />
        //                 <div className='lg:w-1/2  flex-1 space-y-2'>
        //                     <p className='text-xl font-[600]'>Test 1</p>
        //                     <p className='text-400 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident recusandae eos distinctio molestias porro accusantium soluta non sed, dolores repellendus ullam iste nam quisquam, libero, delectus animi. Sed quia a, qui explicabo itaque aliquam repudiandae iure sint eum nemo id nostrum doloribus accusantium iste consequatur praesentium laboriosam voluptatibus! Tempore perferendis nemo doloremque repellat dignissimos repellendus voluptatem nihil quam enim debitis voluptas inventore atque earum iusto, quo pariatur vero laboriosam consequatur voluptate adipisci mollitia. Porro quas, odit pariatur minus eos obcaecati? Quae minima in facere eligendi, placeat, magnam, fuga laborum amet consectetur quis quasi eum enim animi doloribus accusamus perferendis suscipit.</p>
        //                 </div>
        //             </div>
        //             <div className='flex-center flex-col lg:flex-row gap-10 md:px-8 lg:px-0'>
        //                 <img className='lg:w-2/5 h-[300px] rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFzsAxHIAUEq-XySW_-4ItkcEpunmO3uXeg&usqp=CAU' />
        //                 <div className='lg:w-1/2  flex-1 space-y-2'>
        //                     <p className='text-xl font-[600]'>Test 1</p>
        //                     <p className='text-400 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident recusandae eos distinctio molestias porro accusantium soluta non sed, dolores repellendus ullam iste nam quisquam, libero, delectus animi. Sed quia a, qui explicabo itaque aliquam repudiandae iure sint eum nemo id nostrum doloribus accusantium iste consequatur praesentium laboriosam voluptatibus! Tempore perferendis nemo doloremque repellat dignissimos repellendus voluptatem nihil quam enim debitis voluptas inventore atque earum iusto, quo pariatur vero laboriosam consequatur voluptate adipisci mollitia. Porro quas, odit pariatur minus eos obcaecati? Quae minima in facere eligendi, placeat, magnam, fuga laborum amet consectetur quis quasi eum enim animi doloribus accusamus perferendis suscipit.</p>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>
        // <div className='bg-customGreen-100'>
        //     <div className='max-w-fullWidth mx-auto px-4 py-8'>
        //         <div className='text-center'>
        //             <span className='py-1 px-2 bg-green-300 text-green-600 text-xl rounded'>Services</span>
        //         </div>
        //         <div>
        //             <h3 className='text-xl xs:text-3xl sm:text-4xl md:w-3/5 mx-auto text-center font-[600] pt-4 my-4 '>What facilites we provided</h3>
        //             <div className='flex justify-between flex-wrap py-8'>
        //                 <div className='xs:w-[60%] sm:w-1/2 md:w-[40%] lg:w-[23%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
        //                     <div className='flex-between flex-col group overflow-hidden'>
        //                         <img className='rounded-t group-hover:scale-110 transition-all duration-500' src='https://medicate.peacefulqode.com/wp-content/uploads/2022/02/1-7.jpg' alt='meetha-paan' />
        //                         <div className='p-4 space-y-1'>
        //                             <h6 className='font-[600]'>Cardiology</h6>
        //                             <p>We offer services for various events like office parties, and gala dinners.</p>
        //                         </div>

        //                     </div>
        //                 </div>
        //                 <div className='xs:w-[60%] sm:w-1/2 md:w-[40%] lg:w-[23%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
        //                     <div className='flex-between flex-col group overflow-hidden'>
        //                         <img className='rounded-t group-hover:scale-110 transition-all duration-500' src='https://medicate.peacefulqode.com/wp-content/uploads/2022/02/2-7.jpg' alt='meetha-paan' />
        //                         <div className='p-4 space-y-1'>
        //                             <h6 className='font-[600]'>Endocrinology</h6>
        //                             <p>Special party arrangements for your guest. we cover all parties like Birthday parties, and other celebrations.</p>
        //                         </div>

        //                     </div>
        //                 </div>
        //                 <div className='xs:w-[60%] sm:w-1/2 md:w-[40%] lg:w-[23%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
        //                     <div className='flex-between flex-col group overflow-hidden'>
        //                         <img className='rounded-t group-hover:scale-110 transition-all duration-500' src='https://medicate.peacefulqode.com/wp-content/uploads/2022/02/3-3.jpg' alt='meetha-paan' />
        //                         <div className='p-4 space-y-1'>
        //                             <h6 className='font-[600]'>Neurology</h6>
        //                             <p>We also undertake order from restaurants, and offer our services to our clients at resonable pricing.</p>
        //                         </div>

        //                     </div>
        //                 </div>
        //                 <div className='xs:w-[60%] sm:w-1/2 md:w-[40%] lg:w-[23%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
        //                     <div className='flex-between flex-col group overflow-hidden'>
        //                         <img className='rounded-t group-hover:scale-110 transition-all duration-500' src='https://medicate.peacefulqode.com/wp-content/uploads/2021/12/3-467x352.jpg' alt='meetha-paan' />
        //                         <div className='p-4 space-y-1'>
        //                             <h6 className='font-[600]'>Orthopaedics</h6>
        //                             <p>We have specialization in hosting Marriage stalls as per your selection of items and other requirements.</p>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='text-center'>
        //             <button className='button button--action'>Explore more</button>
        //         </div>
        //     </div>
        // </div>
        <div className='bg-white'>
        <div className='max-w-fullWidth mx-auto px-4 py-8'>
            <div className='text-center'>
                <h3 className='text-xl xs:text-3xl sm:text-4xl md:w-3/5 mx-auto text-center font-[600] pt-4 my-2 '>What MedicVerse Offers</h3>
            </div>
            <div>
                <div className='text-center'>
                    <p className='py-1 px-2 text-customGreen-900 text-xl rounded'>Range of services to build your network and advance in healthcare</p>
                </div>
                <div className='flex justify-around flex-wrap py-8 gap-10 sm:px-4'>
                    <div className='group rounded relative text-gray-600'>
                        <div className='p-4 shadow-sm group-hover:shadow-xl group-hover:shadow-customGreen-500 flex flex-col md:flex-row justify-between items-center gap-x-4 rounded'>
                            <img className='rounded w-[100%] sm:w-[70%] md:w-[40%]' src={medicalNetwork} alt='medical-networking' />
                            <div className="sm:w-[70%] my-6 md:my-0 px-4 text-center space-y-3">
                                <h4 className='font-[600] text-center '>Networking</h4>
                                <p className='sm:text-2xl'> Connect and grow your network with fellow healthcare professionals and stakeholders.</p>
                            </div>
                        </div>
                    </div>
                    <div className='group rounded relative text-gray-600'>
                        <div className='p-4 shadow-sm group-hover:shadow-xl group-hover:shadow-customGreen-500 flex flex-col md:flex-row-reverse justify-between items-center gap-x-4 rounded'>
                            <img className='rounded w-[100%] sm:w-[70%] md:w-[35%]' src={medicalCases} alt='medical-cases' />
                            <div className="sm:w-[70%] my-6 md:my-0 px-4 text-center space-y-3">
                                <h4 className='font-[600] text-center'>Medical cases</h4>
                                <p className='sm:text-2xl'>Post unusual medical cases seeking immediate skilled medical consultation within community.</p>
                            </div>
                        </div>
                    </div>
                    <div className='group rounded relative text-gray-600'>
                        <div className='p-4 shadow-sm group-hover:shadow-xl group-hover:shadow-customGreen-500 flex flex-col md:flex-row justify-between items-center gap-x-4 rounded'>
                            <img className='rounded w-[100%] sm:w-[70%] md:w-[40%]' src={medicalJobs} alt='medical-jobs' />
                            <div className="sm:w-[70%] my-6 md:my-0 px-4 text-center space-y-3">
                                <h4 className='font-[600] text-center'>Jobs</h4>
                                <p className='sm:text-2xl'>Find jobs in healthcare contributing to the cause of healthy community.</p>
                            </div>
                        </div>
                    </div>
                    <div className='group rounded relative text-gray-600'>
                        <div className='p-4 shadow-sm group-hover:shadow-xl group-hover:shadow-customGreen-500 flex flex-col md:flex-row-reverse justify-between items-center gap-x-4 rounded'>
                            <img className='rounded w-[100%] sm:w-[70%] md:w-[40%]' src={medicalMarking} alt='medical-cases' />
                            <div className="sm:w-[70%] my-6 md:my-0 px-4 text-center space-y-3">
                                <h4 className='font-[600] text-center'>Marketplace</h4>
                                <p className='sm:text-2xl'>Healthcare marketplace for all your urgent medical supplies need.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='rounded relative bg-gradient-to-r from-customGreen-100 to-customGreen-50 text-gray-600'>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-x-4 rounded'>
                            <img className='rounded w-[100%] sm:w-[70%] md:w-[30%] h-[200px]' src={medicalJobs} alt='medical-jobs' />
                            <div className="sm:w-[70%] my-6 md:my-0 px-4">
                                <h6 className='font-[600] text-center'>Jobs</h6>
                                <p>Find jobs in healthcare contributing to the cause of healthy community.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded relative bg-gradient-to-r from-customGreen-100 to-customGreen-50 text-gray-600'>
                        <div className='flex md:flex-row-reverse justify-between items-center gap-x-4 rounded'>
                            <img className='rounded w-[100%] sm:w-[70%] md:w-[30%] h-[200px]' src={medicalMarking} alt='medical-marketing' />
                            <div className="sm:w-[70%] my-6 md:my-0 px-4">
                                <h6 className='font-[600] text-center'>Marketplace</h6>
                                <p>Healthcare marketplace for all your urgent medical supplies need.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className='text-center'>
                <button className='button button--action'>Explore more</button>
            </div> */}
        </div>
    </div>
    )
}

export default ServicesLists