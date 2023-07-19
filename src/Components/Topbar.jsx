import React from 'react'
import{BsChatSquareDots, BsFillClockFill, BsPhoneFill} from "react-icons/bs"


export const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>

<div className='flex items-center'> 

  <BsChatSquareDots size={30} className='text-[#5651e5]  mr-2'/>
  <h1 className='text-xxl font-bold text-gray-700'>WEEKEND</h1>
</div>

<div className='flex'>
  <div className='hidden md:flex items-center px-6'>
   
  <BsFillClockFill size={25} className='mr-2 text-[#5651e5]'/>

    <h2 className='text-sm text-gray-700'>9AM - 5AM</h2>
  </div>
  <div className='hidden md:flex items-center px-6'>
    
<BsPhoneFill size={25} className='mr-2 text-[#5651e5]' />
    <h2 className='text-sm text-gray-700' >01051448466</h2>
  </div>
  <button>Get A Free Trip</button>
</div>



    </div>
  )
}
export default Topbar