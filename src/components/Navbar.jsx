import React from 'react'
import logo from '../assets/images/Component 40.png'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-5'>
        <div className="logo">
            <img className='w-[191px] h-[39px]' src={logo} alt="logo" />
        </div>
        <div className="flex">
            <ul className="nav  gap-x-10 hidden md:flex">
                <li className='text-gray-400 cursor-pointer text-[18px] hover:text-black'>Home</li>
                <li className='text-gray-400 cursor-pointer text-[18px] hover:text-black'>Flashcard</li>
                <li className='text-gray-400 cursor-pointer text-[18px] hover:text-black'>Contact</li>
                <li className='text-gray-400 cursor-pointer text-[18px] hover:text-black'>FAQ</li>
            </ul>
             <div className='ml-10'>
                <span className='bg-gradient-to-b from-slate-700  to-indigo-500 text-white px-5 pb-2 pt-1  rounded-3xl cursor-pointer '>Login</span>
             </div>
        </div>
    </div>
  )
}

export default Navbar