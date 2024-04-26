import React from 'react'
import vector10 from '../assets/images/Vector (10).png'

const Footer = () => {
  return (
    <div className='px-5 pb-20 mt-10'>
        <p className='Footer-heading text-[38px] font-semibold'>FAQ</p>

        <div className='grid gap-y-5 mt-10'>
            <p className='border border-blue-500 p-3 rounded-xl  font-bold flex justify-between hover:border-blue-800 hover:border-2'>Can education flashcards be used for all age groups? <img src={vector10} className='h-[8px] w-[15px  mt-2 cursor-pointer' alt="" /></p>
            <p className='border border-blue-500 p-3 rounded-xl  font-bold flex justify-between hover:border-blue-800 hover:border-2'>How do education flashcards work? <img src={vector10} className='h-[8px] w-[15px  mt-2 cursor-pointer' alt="" /></p>
            <p className='border border-blue-500 p-3 rounded-xl  font-bold flex justify-between hover:border-blue-800 hover:border-2'>Can education flashcards be used for test preparation? <img src={vector10} className='h-[8px] w-[15px  mt-2 cursor-pointer' alt="" /></p>
        </div>
    </div>
  )
}

export default Footer