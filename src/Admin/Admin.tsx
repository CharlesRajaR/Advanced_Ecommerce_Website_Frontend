import { Menu } from '@mui/material'
import React from 'react'
import Panel from './Panel.tsx'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard.tsx'
import Coupon from './Coupon/Coupon.tsx'
import CouponForm from './Coupon/CouponForm.tsx'
import HomePage from './HomePage/HomePage.tsx'
import Deals from './HomePage/Deals/Deals.tsx'

const Admin = () => {
  return (
    <div className='relative'>
    <div className="top-2 left-2 absolute md:hidden block">
      <p className='text-3xl font-bold text-black cursor-pointer'>=</p>
    </div>
    <div className='flex gap-3 w-full *:m-3 '>
      <div className="w-[30%]">
       <Panel/>
      </div>
      <div className='w-[80%]'>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/coupons' element={<Coupon/>}/>
          <Route path='/new/coupons' element={<CouponForm/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/electronics/category' element={<Dashboard/>}/>
          <Route path='/shop/category' element={<Dashboard/>}/>
          <Route path='/deals' element={<Deals/>}/>
          <Route path='/account' element={<Dashboard/>}/>
        </Routes>
      </div>
    </div>
    </div>
  )
}

export default Admin
