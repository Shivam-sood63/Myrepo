import React from 'react'

const MyProjects = () => {
  return (
    <div className='w-full text-center bg-black text-white'>
      <div className='text-4xl underline'>
        <h1 className='font-bold p-4'>Projects</h1>
      </div>
      <div className=' w-full md:flex'>
      <div className=' sm:flex-wrap'>
        <img className='p-7 flex' src="src\assets\Hospital.png" alt="" />
        <h1 className='p-3 font-semibold'>Appointment Booking System</h1>
      </div>
      <div className=' sm:flex-wrap'>
        <img className='p-7 flex' src="src\assets\donation.png" alt="" />
        <h1 className='p-3 font-semibold'>Donation Website</h1>
      </div>
      <div className=' sm:flex-wrap'>
        <img className='p-7 flex' src="src/assets/Eshop.png" alt="" />
        <h1 className=' p-3 font-semibold'>E-Shopping Website</h1>
      </div>
      </div>
    </div>
  )
}

export default MyProjects
