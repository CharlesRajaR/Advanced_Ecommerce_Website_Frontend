import { Divider, Pagination, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import ProductCard from './ProductCard.tsx'
import FilterSection from './FilterSection.tsx'

const Product = () => {
  const theme = useTheme();
   const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
   const [page, setPage] = useState(0);
   const handlePageChange = (value:number) => {
       setPage(value);
   }
  return (
    <div className='w-full flex px-3 pt-5 space-x-3'>
      <div className="hidden lg:block lg:w-[25%]">
        <FilterSection/>
      </div>
      {isLarge && <Divider orientation='vertical' flexItem/>}
      <div className="w-full  lg:w-[75%]">
       <div className="">
        <h1 className='font-semibold text-xl lg:text-2xl text-center py-5'>WOMEN SAREES</h1>
       </div>
       <div className='-z-10 relative text-primary-color'>
        <select name="sort by" id="sort by" className='block w-full lg:w-[250px] px-4 py-3
        border border-primary-color absolute right-3 text-primary-color font-semibold
        rounded-md shadow-sm focus:ring-blue-500'>
            <option value="low to high">low to high</option>
            <option value="high to low">high to low</option>
        </select>
       </div>
       <div className="pt-5 gap-3 lg:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            [1,1,1,1,1,1,1].map((item, index) => {
                return(
                    <ProductCard key={index}/>
               )
            })
        }
       </div>
       <div className="py-10 flex justify-center">
        <Pagination
        onChange={(e, value) => handlePageChange(value)}
        count={10}
        variant='outlined'
        color='primary'
        />
       </div>
      </div>
    </div>
  )
}

export default Product