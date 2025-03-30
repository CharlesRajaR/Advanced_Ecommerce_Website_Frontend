import { Add, AddShoppingCart, Favorite, LocalShipping, Remove, Shield, Star, Wallet, WorkspacePremium } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import { teal } from '@mui/material/colors'
import React, { useState } from 'react'
import SimilarProduct from './SimilarProduct.tsx'

const ProductDetails = () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 px-5 py-5">
          <div className="w-full flex ">
              <div className="w-[25%] flex-col">
               {
                [1,1,1,1].map((item, i) => {
                  return(
                    <div key={i} className="py-3 px-3">
                      <img className='w-[90px] h-[95px] rounded-lg shadow-slate-500 shadow-sm' src="https://i.etsystatic.com/26521752/r/il/67d073/2819813185/il_1588xN.2819813185_9u8p.jpg" alt="" />
                    </div>
                  )
                })
               }
              </div>
              <div className="w-[75%] px-5">
                  <img className='rounded-lg' src="https://i.etsystatic.com/26521752/r/il/67d073/2819813185/il_1588xN.2819813185_9u8p.jpg" alt="" />
              </div>
          </div>
          <div className="flex flex-col gap-5">
             <div className="">
              <p className='text-primary-color py-2 font-bold text-xl lg:text-2xl'>Ram Clothing</p>
              <p className='text-sm lg:text-lg text-slate-500 font-semibold'>Silk Blended Kanchepuram Saree</p>
             </div>

             <div className="flex gap-5 items-center">
              <div className="">
                <IconButton><span>4</span><Star color='primary'/></IconButton>
              </div>
              <div className="text-slate-500 text-lg font-semibold">
                <p><span>354</span>{' '} Ratings</p>
              </div>
             </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-5 items-center">
              <div className="text-xl font-bold ">
                 <span>₹1149</span>
              </div>
              <div className="thin-line-through text-sm text-gray-500 font-semibold">
                <span>₹800</span>
              </div>
              <div className="text-primary-color text-xl logo font-semibold">
                 <span>50% off</span>
              </div>
              </div>
              <div className="text-lg font-bold">
                <p className='text-slate-500'>inclusive of all taxes <span className='text-primary-color'>Free shipping above ₹1500</span></p>
              </div>
            </div>


            <div className="flex flex-col gap-1 pt-3 text-slate-500 text-xl font-semibold">
              <div className="flex gap-3">
                <IconButton><Shield sx={{color:teal[500]}}/></IconButton>
                <p>Authentic & Quality Assured</p>
              </div>
              <div className="flex gap-3">
                <IconButton><WorkspacePremium sx={{color:teal[500]}}/></IconButton>
                <p>100% money back guarantee</p>
              </div>
              <div className="flex gap-3">
                <IconButton><LocalShipping sx={{color:teal[500]}}/></IconButton>
                <p>free Shipping & Returns</p>
              </div>
              <div className="flex gap-3">
                <IconButton><Wallet sx={{color:teal[500]}}/></IconButton>
                <p>Payment on Delivery is available</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="">
                <p className='text-2xl text-slate-700 font-bold'>Quantity</p>
              </div>
              <div className="gap-3 items-center">
                <Button disabled={value===1} variant='outlined'  onClick={() => setValue(value - 1)}>
                  <Remove/>
                </Button>
                <span className='px-5'>{value}</span>
                <Button variant='outlined'  onClick={() => setValue(value + 1)}>
                  <Add />
                </Button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row  gap-7 pt-5">
                <div className="">
                  <Button variant='contained' startIcon={<AddShoppingCart/>}>
                      Add To Cart
                  </Button>
                </div>
                <div className="">
                  <Button variant='outlined' startIcon={<Favorite/>}>
                      Add To WishList
                  </Button>
                </div>
            </div>


            <div className="">
              <p className='text-sm text-slate-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore, libero earum error cum nemo aperiam doloribus 
                sequi dolor tenetur veniam? Ad quas sint id, unde voluptatum possimus labore atque.</p>
            </div>
              
          </div>
        </div>
        <div className="flex">

        </div>
        <div className="">
          <SimilarProduct/>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails