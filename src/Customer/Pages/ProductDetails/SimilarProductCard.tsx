import React from 'react'

const SimilarProductCard = () => {
  return (
    <div className='w-[100px] h-[200px] md:w-[150px] mb-10  md:h-[250px] flex flex-col'>
       <div className="w-full h-[70%]">
          <img className='w-full h-full rounded-md object-cover'
          src="https://i.etsystatic.com/26521752/r/il/67d073/2819813185/il_1588xN.2819813185_9u8p.jpg" alt="" />
       </div>
       <div className="w-full h-[30%]">
          <p className='text-xs md:text-xl font-bold'>Ram Clothing</p>
          <p className='text-xs md:text-sm font-semibold text-slate-500'>Silk Blend Banaras Saree</p>
          <div className='flex flex-row md:gap-3 gap-1 flex-wrap'>
              <p className='text-xs md:text-sm font-bold'>₹400</p>
              <p className='text-xs md:text-sm text-slate-500 line-through'>₹1200-</p>
              <p className='text-xs text-primary-color'>74% off</p>
          </div>
       </div>
    </div>
  )
}

export default SimilarProductCard
