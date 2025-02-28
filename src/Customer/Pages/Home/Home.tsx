import React from 'react'
import ElectricCategory from './ElectricCategory.tsx'
import CategoryGrid from './CategoryGrid.tsx'
import Deals from './Deals.tsx'
import ShopByCategory from './ShopByCategory.tsx'
import SellerCard from './SellerCard.tsx'

const Home = () => {
  return (
    <div className='space-y-3'>
        <div className="">
            <ElectricCategory/>
        </div>
        <div className="">
            <CategoryGrid/>
        </div>
        <div className="">
            <p className='logo text-primary-color pb-7 text-2xl text-center font-bold lg:text-4xl'>
                Today Deals
            </p>
            <Deals/>
        </div>
        <div className="pt-5">
            <p className='logo text-primary-color pb-7 text-2xl text-center font-bold lg:text-4xl'>
                Shop By Category
            </p>
            <ShopByCategory/>
        </div>
        <div className="">
            <SellerCard/>
        </div>
    </div>
  )
}

export default Home
