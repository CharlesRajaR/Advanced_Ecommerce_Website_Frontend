import { ElectricBolt } from '@mui/icons-material'
import { Avatar, colors } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
    const navigate = useNavigate()
  return (
    <div className='w-[80%] px-3 py-3'>
       <div>
        <p className='text-2xl font-bold'>All orders</p>
        <p className='text-sm text-slate-600 font-thin'>from anytime</p>
       </div>
       <div className="w-full mt-3 flex flex-col gap-5">
          {
            [1,1,1,1,1].map((item) => {
                return(
                    <div onClick={() => navigate('/1/2')}
                     className="shadow-slate-500 shadow-md rounded-md  cursor-pointer flex flex-col">
                       <div className="flex px-3 py-3 gap-3">
                         <Avatar>
                            <ElectricBolt sx={{color:teal[300]}}/>
                         </Avatar>
                         <div>
                            <p className='text-xl font-semibold text-teal-500'>SHIPPED</p>
                            <p className='text-sm font-thin text-slate-900'>Arriving by Fri, Oct 25</p>
                         </div>
                       </div>
                       <div className="flex gap-3 bg-teal-400 transition duration-500 hover:bg-teal-200">
                         <div className="w-[100px] h-[100px]">
                            <img className='w-full h-full object-contain' src='/logo512.png' alt="img" />
                         </div>
                         <div className="flex flex-col gap-1">
                           <p className='text-lg font-semibold'>Ram Clothing</p>
                           <p className='text-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, commodi!</p>
                           <p className='text-sm font-semibold text-slate-700'>size:FREE</p>
                         </div>
                       </div>
                    </div>
                )
            })
          }
       </div>
    </div>
  )
}

export default Orders