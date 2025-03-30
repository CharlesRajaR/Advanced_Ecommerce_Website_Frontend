import { Favorite, LocalOffer } from '@mui/icons-material'
import { Button, Divider, IconButton, TextField } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const PriceCard = () => {
  return (
    <div className='border-x-2 border-y-2 border-slate-500 rounded-md'>
      <div className="p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
           <div className="flex gap-3">
             <div className="">
                <IconButton>
                    <LocalOffer sx={{color:teal[500], fontSize:"17px"}}/>
                </IconButton>
             </div>
             <div className="text-semibold text-slate-700">
                Apply Coupons
             </div>
           </div>
           <div className="flex justify-between items-center">
             <TextField placeholder='coupon code' variant='outlined' size='small'/>
             <Button size='small'>
                Apply
             </Button>
           </div>
        </div>
        <Divider/>
         <div className="flex flex-col gap-3 font-bold text-lg text-slate-500">
            <div className="flex justify-between items-center">
                <p>SubTotal</p>
                <p>1000</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Discount</p>
                <p>100</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Shipping</p>
                <p>74</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Platform Fee</p>
                <p>10</p>
            </div>
         </div>
        <Divider/>
        <div className="flex justify-between text-lg font-bold">
          <p>Total</p>
          <p>1300</p>
        </div>
        <div className="">
            <Button fullWidth variant='contained'>
              Buy Now
            </Button>
        </div>
      </div>
      <div className="py-7 px-5 flex justify-between">
        <div className="">
            <p className='text-sm font-semibold text-slate-500'>Add From WishList</p>
        </div>
        <div className="">
            <Favorite color='primary'/>
        </div>
      </div>
    </div>
  )
}

export default PriceCard
