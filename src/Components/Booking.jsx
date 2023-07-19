import React from 'react'

const Booking = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>


<form className='lg:flex  lg:justify-between w-full items-center' >


<div className='flex flex-col my-2 py-2'>
<label>Destination</label>

<select className='lg:w-[300px] md:w-full border rounded-md p-2'>
<option>Egypt</option>
<option>Turkey</option>
<option>Maldives</option>
<option>Sant Lucia</option>
<option>London</option>
<option>Paris</option>
<option>Thialiand</option>
<option>Japan</option>
<option>Dubai</option>
<option>KeyWest</option>

</select>


</div>

<div className='flex w-full'>
    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
    <label htmlFor="">Check-IN</label>
    <input className='border rounded-md p-2' type="date" />
    </div>
    
    <div  className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
    <label>Check-Out</label>
    <input className='border rounded-md p-2' type="date" />
    </div>
    

    
    </div>

<div className='flex flex-col my-2 p-2 w-full'>
<label>Search</label>
<button className='w-full'>Rates&Availbaleties</button>

</div>

</form>
    </div>
  )
}

export default Booking