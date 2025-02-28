import React from 'react'
import CategoryCard from './CategoryCard.tsx'

const ShopByCategory = () => {
  return (
    <div className='flex px-3 space-x-3 space-y-3 flex-wrap justify-center items-center'>
      {
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item) => <CategoryCard/>)
      }
    </div>
  )
}

export default ShopByCategory
