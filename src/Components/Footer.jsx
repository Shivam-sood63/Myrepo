import React from 'react'
const Footer = () => {
  return (
    <div>
        <div className='text-center font-bold text-3xl text-white bg-black p-7 underline'>
         <h1>Contact-Me</h1>
        </div>
        <div className='sm:w-full md:flex bg-black text-white px-3 py-3 md:pl-36 md:px-22'>
            <div className='p-1 md:w-[50%] cursor-pointer '>
                <p className='p-1'> Shivam Kumar</p>
                <p ><i className="fa-solid fa-envelope p-1" ></i>E-mail Address: shivsood2002@gmail.com</p>
                <p><i className="fa-solid fa-phone p-1"></i>Contact no : 6397484689 </p>
                <div className='flex gap-4 text-xl py-2 px-2'>
                <a href="https://www.linkedin.com/in/shivam-kumar6397/"> <i className="fa-brands fa-linkedin "></i></a>
               <a href="https://github.com/Shivam-sood63"><i className="fa-brands fa-github"></i></a>

                </div>
               
            </div>
            <div className='p-1 md:w-[50%]'>
                <p><i className="fa-solid fa-location-dot p-1"></i>Address : Gandhimnagar Muzaffarnagar Uttar Pradesh India </p>
                <p className='p-1'>Pincode : 251001</p>
            </div>
          
        </div>
       <div className='bg-black text-white text-center p-4 '>
        <p>developed a protfolio &hearts; by Shivam Sood</p>
       </div>

    </div>
  )
}

export default Footer
