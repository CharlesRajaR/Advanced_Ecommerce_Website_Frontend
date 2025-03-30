import React from 'react'
import SimilarProductCard from './SimilarProductCard.tsx'

const SimilarProduct = () => {
  return (
    <div className="flex flex-col gap-3">
    <div className="">
        <p className='text-2xl font-bold py-5 px-3'>Similar Products</p>
    </div>
    <div className='px-3 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7'>
      {
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item) => {
            return(
                <div>
                <SimilarProductCard/>
                </div>
            )
        })
      }
    </div>
    </div>
    
  )
}

export default SimilarProduct
