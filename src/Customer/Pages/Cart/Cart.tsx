import React from 'react'
import CartItem from './CartItem.tsx'
import PriceCard from './PriceCard.tsx'

const Cart = () => {
  return (
    <div className='px-20 pt-20 min-h-screen'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="col-span-2 flex flex-col gap-7"> 
          {
            [1,1,1,1,1].map((item, index) => {
                return(
                    <div key={index} className="">
                        <CartItem/>
                    </div>
                )
            })
          }
        </div>
        <div className="col-span-1">
           <PriceCard/>
        </div>
      </div>
    </div>
  )
}

export default Cart
