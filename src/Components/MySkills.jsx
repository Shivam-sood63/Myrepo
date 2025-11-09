import React from "react";
import mh1 from "../assets/shivamh.png"
import mh2 from "../assets/shivamc.png"
import mh3 from "../assets/shivamj.png"
import mh4 from "../assets/shivamr.png"

const MySkills = () => {
  return (
    <div className="bg-black text-white w-full">
      <div>
        <h1 className="text-3xl font-bold underline text-center p-2 ">
          Skills
        </h1>
      </div>
      <div className="w-full">
        <div className="flex w-full justify-center px-6 py-2">
          <div className="w-52 rounded mx-4  md:w-44 md:m-10 sm:w-32 sm:px-0  bg-gray-800 hover:bg-linear-65 from-purple-500 to-blue-600 cursor-pointer transition delay-3  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 items-center">
            <img className="p-1" src={mh1} alt="" />
            <h1 className="text-center font-bold pb-2 ">HTML</h1>
          </div>
          <div className="w-52 rounded mx-4  md:w-44 md:m-10 sm:w-32 sm:px-0  bg-gray-800  items-center hover:bg-linear-65 from-purple-500 to-blue-600 cursor-pointer transition delay-3  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            <img className="p-1" src={mh2} alt="" />
            <h1 className="text-center font-bold pb-2 ">CSS</h1>
          </div>
          <div className="w-52 rounded mx-4  md:w-44 md:m-10 sm:w-32 sm:px-0  bg-gray-800  items-center hover:bg-linear-65 from-purple-500 to-blue-600 cursor-pointer transition delay-3  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            <img className="p-1" src={mh3} alt="" />
            <h1 className="text-center font-bold pb-2 ">JS</h1>
          </div>
          <div className="w-52 rounded mx-4  md:w-44 md:m-10 sm:w-32 sm:px-0  bg-gray-800  items-center hover:bg-linear-65 from-purple-500 to-blue-600 cursor-pointer transition delay-3  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            <img className="p-1" src={mh4} alt="" />
            <h1 className="text-center font-bold pb-2 ">React</h1>
          </div>
        </div>



        <div className="flex w-full justify-center px-6 py-2">
          <div className="w-52 rounded mx-4  md:w-44 md:m-10 sm:w-32 sm:px-0  bg-gray-800  items-center hover:bg-linear-65 from-purple-500 to-blue-600 cursor-pointer transition delay-3  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            <img className="p-1" src="src/assets/shivamt.png" alt="" />
            <h1 className="text-center font-bold pb-2 ">Tailwind</h1>
          </div>
          <div className="w-52 rounded mx-4  md:w-44 md:m-10 sm:w-32 sm:px-0  bg-gray-800  items-center hover:bg-linear-65 from-purple-500 to-blue-600 cursor-pointer transition delay-3  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            <img className="p-1" src="src/assets/shivamg.png" alt="" />
            <h1 className="text-center font-bold pb-2 ">Git</h1>
          </div>
          <div className="w-52 rounded mx-4  md:w-44 md:m-10 sm:w-32 sm:px-0  bg-gray-800  items-center hover:bg-linear-65 from-purple-500 to-blue-600 cursor-pointer transition delay-3  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            <img className="p-1" src="src/assets/shivamgh.png" alt="" />
            <h1 className="text-center font-bold pb-2 ">GitHub</h1>
          </div>
        </div>

        <div className="flex w-full justify-center px-32 py-1 md:px-4 md:py-4 ">
          <div className="w-52 rounded mx-4  md:w-44 md:m-10 sm:px-0  bg-gray-800  items-center justify-center text-center hover:bg-linear-65 from-purple-500 to-blue-600 cursor-pointer transition delay-3  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            <img className="items-center p-1 md:px-5" src="src/assets/shivamn.png" alt="" />
            <h1 className="text-center font-bold pb-2 ">Node</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MySkills;
