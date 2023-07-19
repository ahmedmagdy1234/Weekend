import React from 'react';

const Hero = () => {
  return (
    <div className='w-auto h-[90vh]'>
     
    
      <div className='w-full h-full   md:w-full md:h-[-500px]  '>
     
        <img
          src='https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3433&q=80'
          alt='/'
          className='  md:w-full md:h-full object-cover brightness-50 w-full h-full md:flex md:self-center'
    
        />
      


      </div>




      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4 '>
          <h1 className='font-bold text-4xl'>Find Your VIP Trip</h1>
          <h2 className='text-4xl py-4 italic'>With Us</h2>
          <p>
      
          “Every aspect of this cruise experience was wonderful. Our cruise director… was always available for anything that we needed. Our tour guides… were so helpful and full of knowledge about the places that we visited… All the staff on the ship were outstanding and made our trip exceptional. The Tauck experience was top notch!”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;