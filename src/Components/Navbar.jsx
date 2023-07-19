import React, {  useState } from 'react'
import {FaBars,FaFacebookF,FaTwitter,FaGooglePlusG,FaInstagram} from "react-icons/fa"



const Navbar = () => {

const [Nav, setNav] = useState(false);

const handleNav = () =>{

setNav(!Nav)

};


  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80  '>


<ul className='hidden sm:flex px-4 '>
    <li>
<a href=""> Home</a>        
    </li>
    <li>
<a href="#gallery"> Gallery</a>        
    </li>
    <li>
<a href="#deals"> Deals</a>        
    </li>
    <li>
<a href="#contact"> Contact</a>        
    </li>


</ul>



<div className='flex  ms-auto'>
<FaFacebookF size={20} className='mx-4 ' />
<FaTwitter  size={20} className='mx-4'/>
<FaGooglePlusG  size={20} className='mx-4'/>
<FaInstagram  size={20} className='mx-4'/>
</div>




{/*Hamb icon */}


<div onClick={handleNav} className='sm:hidden  z-10'>
    
<FaBars size={25} className='mr-[10px] cursor-pointer'/>

</div>




{/*Mobile menu */}


<div onClick={handleNav} className='sm:hidden '>

</div>



<div





className={Nav?"overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col  ":"absolute top-0 left-[-100%]   h-screen w-full  ease-in duration-300"}
>



<ul className='h-full w-full text-center pt-10'> 
   <li className='text-3xl py-6'>
<a href="/"> Home</a>        
    </li>
   <li className='text-3xl py-6'>
<a href="#gallery"> Gallery</a>        
    </li>
   <li className='text-3xl py-6'>
<a href="#deals"> Deals</a>        
    </li>
   <li className='text-3xl py-6'>
<a href="#contact"> Contact</a>        
    </li>
</ul>




</div>



    </div>
  )
}

export default Navbar
