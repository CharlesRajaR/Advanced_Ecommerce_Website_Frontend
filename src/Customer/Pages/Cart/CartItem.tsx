import { Add, Close, Remove } from '@mui/icons-material'
import { Divider, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
  return (
    <div className='relative flex flex-col shadow-black shadow-lg rounded-md'>
      <div className='absolute top-1 right-1'>
        <IconButton color='primary'>
          <Close/>
        </IconButton>
      </div>
      <div className="py-3 flex gap-5">
          <div className='w-[100px] h-[150px] pl-3'>
              <img className='w-full h-full object-cover'
            src="https://i.etsystatic.com/26521752/r/il/67d073/2819813185/il_1588xN.2819813185_9u8p.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-3">
             <p className='font-bold text-lg'>Raam Clothing</p>
             <p className='text-sm text-slate-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
             <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
             <p className='font-semibold text-sm'>7 days replacement available</p>
             <p className='font-semibold text-sm text-slate-700'>Quantity :  <span>1</span></p>
          </div>
      </div>
      <Divider/>
      <div className="flex py-5 px-5 justify-between items-center">
         <div className="flex items-center gap-5">
            <div className="">
              <IconButton color='primary'>
              <Remove/>
              </IconButton>
            </div>
            <div className="">
            <p>1</p>
            </div>
            <div className="">
              <IconButton color='primary'>
                <Add/>
              </IconButton>
            </div>
         </div>
         <div className="">
          <p>RS : 799</p>
         </div>
      </div>
    </div>
  )
}

export default CartItem
