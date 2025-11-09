import React from 'react'
import shiv1 from "../assets/Hospital.png"
import shiv2 from "../assets/donation.png"
import shiv3 from "../assets/Eshop.png"
const MyProjects = () => {
  return (
    <div className='w-full text-center bg-black text-white'>
      <div className='text-4xl underline'>
        <h1 className='font-bold p-4'>Projects</h1>
      </div>
      <div className=' w-full md:flex'>
      <div className=' sm:flex-wrap'>
        <img className='p-7 flex' src={shiv1} alt="" />
        <h1 className='p-3 font-semibold'>Appointment Booking System</h1>
      </div>
      <div className=' sm:flex-wrap'>
        <img className='p-7 flex' src={shiv2} alt="" />
        <h1 className='p-3 font-semibold'>Donation Website</h1>
      </div>
      <div className=' sm:flex-wrap'>
        <img className='p-7 flex' src={shiv3} alt="" />
        <h1 className=' p-3 font-semibold'>E-Shopping Website</h1>
      </div>
      </div>
    </div>
  )
}

export default MyProjects
