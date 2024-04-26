import React from 'react'
import house from '../assets/images/Frame.png'
import leftarrow from '../assets/images/Vector (5).png'
import vector8 from '../assets/images/Vector (8).png'
import vector9 from '../assets/images/Vector (9).png'
import vector from '../assets/images/Vector.png'
import vector3 from '../assets/images/Vector (3).png'
import vector1 from '../assets/images/Vector (1).png'
import vector2 from '../assets/images/Vector (2).png'
import frame41 from '../assets/images/Frame 41.png'
import frame48 from '../assets/images/Frame 48.png'


const Content = () => {
  return (
    <div className='px-5'>
        <div className="flex gap-x-2  my-10">
            <img src={house} alt="house" />
            <img src={leftarrow} className='h-[12px] w-[7px] mt-2' alt="" />
            <span className='text-gray-400 text-[18px] cursor-pointer'>Flashcard</span>
            <img src={leftarrow} className='h-[12px] w-[7px] mt-2' alt="" />
            <span className='text-gray-400 text-[18px] cursor-pointer'>Mathematics</span>
            <img src={leftarrow} className='h-[12px] w-[7px] mt-2' alt="" />
            <span className='text-blue-800 font-bold text-[18px] cursor-pointer'>Relation and Functions</span>
        </div>
        <p className='content-heading text-[32px]  font-semibold'>Relation and Functions (Mathematics)</p>

        <div className="flex justify-center mt-16">
            <ul className="flex gap-x-5 mx-auto">
                <li className='text-blue-800 font-semibold border-b-2 px-1 border-b-blue-800 text-[20px]'>Study</li>
                <li className='text-[#696671] px-1 text-[20px] cursor-pointer hover:text-blue-800 hover:font-semibold hover:border-b-2 hover:border-b-blue-800'>Quiz</li>
                <li className='text-[#696671] px-1 text-[20px] cursor-pointer hover:text-blue-800 hover:font-semibold hover:border-b-2 hover:border-b-blue-800'>Test</li>
                <li className='text-[#696671] px-1 text-[20px] cursor-pointer hover:text-blue-800 hover:font-semibold hover:border-b-2 hover:border-b-blue-800'>Game</li>
                <li className='text-[#696671] px-1 text-[20px] cursor-pointer hover:text-blue-800 hover:font-semibold hover:border-b-2 hover:border-b-blue-800'>Others</li>
            </ul>
        </div>
        <div className="flex w-full justify-center mt-10">
            <div className='w-full '>
                <div className='lg:w-[712px] mx-auto h-[385px] bg-gradient-to-l from-slate-700  to-indigo-500 rounded-3xl sm:w-11/12'>
                    <div className="flex justify-between px-10 py-5">
                        <img src={vector8} className='cursor-pointer' alt="" />
                        <img src={vector9} className='cursor-pointer' alt="" />
                    </div>
                    <p className='text-white font-semibold text-center text-3xl mt-24'>9 + 6 + 7x - 2x - 3</p>
                </div>
                <div className="flex mt-5 lg:w-[612px] mx-auto sm:w-11/12">
                    <img src={vector} className='w-[30px] h-[30px] mt-3' alt="" />
                    <div className='mx-auto flex gap-x-4'>
                        <img src={vector1} className='h-[60px] w-[60px]' alt="" />
                        <p className='text-[24px] font-bold mt-2'>01/10</p>
                        <img src={vector2} className='h-[60px] w-[60px]' alt="" />
                    </div>
                    <img src={vector3} className='w-[30px] h-[30px] mt-3' alt="" />
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-10 select-none">
            <img src={frame41} className='h-[120px] w-[217px] hidden md:block'  alt="" />
            <img src={frame48} className='h-[60px] w-[299px] mt-7 cursor-pointer' alt="" />
        </div>

    </div>
  )
}

export default Content