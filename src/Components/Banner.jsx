import React from 'react'

const Banner = () => {
  return (
    <div className='flex items-center justify-center p-11'>
      <div>
      <img className=' w-96 rounded-[100%] shadow-red-600' src="src/assets/shivam.png" alt="" />
      <h1 className=' text-center p-2 m-4 font-bold text-2xl bg-black hover:bg-linear-65 from-purple-700 to-blue-700 text-white rounded-full duration-300 transition-all'> Frontend Developer</h1>
      <p className='lg:text-lg text-center text-black font-bold md:text-xs'>I'm Shivam kumar web developer with a passion  <br />of creating responsive websites...</p>
      </div>
    </div>
  )
}

export default Banner
