import React from 'react'
import paanplate from '../../../assets/images/paanplate.png'

const BetalLeaf = () => {
  return (
    <div className='max-w-fullWidth mx-auto flex-col-reverse flex-start sm:flex-center sm:flex-row py-8 px-4'>
        <div className='sm:w-3/5 space-y-4'>
            <h3 className='font-[600]'>ताम्बुलम | Betal Leaf (PAAN)</h3>
            <p>Ayurveda describes Tambulsevana as a mouth deodorant natural anti-bacterial astringent diuretic, mood enhancer, aphrodisiac, and nerve tonic.It is also claims that it is a past-meal digestive stimulant. It eases anxiety, fosters a sense of well-being, and helps with vocal cords, bad breath, boils, mouth ulcers etc.</p>
            <ul className='sm:px-6 list-image-checkmark list-inside space-y-2'>
                <li>Manages constipation</li>
                <li>Maintains oral health</li>
                <li>Beneficial for respiratory system</li>
                <li>Relieves stress</li>
                <li>Controls diabetes</li>
                <li>Antioxidant</li>
            </ul>
        </div>
        <div className='w-full sm:w-2/5 p-4 h-full'>
          <img src={paanplate} alt='paanlate'/>
        </div>
    </div>
  )
}
export default BetalLeaf