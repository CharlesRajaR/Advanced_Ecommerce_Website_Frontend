import { LocalShipping } from '@mui/icons-material'
import { Button, Divider } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import OrderStepper from './OrderStepper.tsx'

const OrderDetails = () => {
  return (
    <div className='px-5 w-[80%] py-3 min-h-screen'>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1 items-center">
           <div className="w-[150px] h-[150px] ">
            <img className='w-full h-full object-contain' src="/logo512.png" alt="" />
           </div>
           <p className='text-xl font-semibold'>Raam Clothing</p>
           <p className='text-slate-700 font-semibold text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, officia?</p>
           <p className='text-sm font-thin'>size:FREE</p>
           <div className="mt-3">
            <Button  variant='outlined'>Write Review</Button>
           </div>
        </div>
        <Divider/>
        <div className="">
          <OrderStepper orderStatus={"SHIPPED"}/>
        </div>
        <Divider/>
        <div className="flex flex-col gap-1">
         <p className='text-xl font-semibold'>Delivary Address</p>
         <div className="flex gap-5">
            <p>Raja</p>
            <p>123456789</p>
         </div>
         <p>25/B, Lorem ipsum dolor sit amet.</p>
        </div>
        <Divider/>
        <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xl font-semibold">
                <p>Total Item Price</p>
                <p>10000</p>
            </div>
            <p>you saved <strong className='text-teal-500'>2000</strong> on this item</p>
            <div className="bg-teal-200 my-5 py-3  rounded-md shadow-sm shadow-teal-500
             hover:bg-teal-100 transition duration-500 flex gap-3 items-center px-3">
                <LocalShipping />
              <p className='font-bold text-slate-500 text-xl'>Pay on delivary</p>
            </div>
            <p><strong>sold by</strong> Ram Clothing</p>
        </div>
        <Divider/>
        <div className="mt-10 px-3">
            {
                false
                ?
                <Button sx={{backgroundColor:red[300], color:'white'}} variant='contained' fullWidth>
                    Order Canceled
                </Button>
                :
                <Button sx={{color:red[300]}} variant='outlined' fullWidth>
                    Cancel Order
                </Button>
            }
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
