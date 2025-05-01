import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Entry from './Components/Entry.tsx'
import SellerDashboard from './Pages/SellerDashboard/SellerDashboard.tsx'

const SellerRouter = () => {
  return (
    <div>
      {/* <Entry/> */}
      <SellerDashboard/>
    </div>
  )
}

export default SellerRouter
