import React from 'react'
import Panel from '../Panel/Panel.tsx'
import { Route, Routes } from 'react-router-dom'
import Orders from '../Orders/Orders.tsx'
import Dashboard from '../Dashboard/Dashboard.tsx'
import Products from '../Products/Products.tsx'
import ProductForm from '../Products/ProductForm.tsx'
import Payments from '../Payments/Payments.tsx'
import Transactions from '../Transactions.tsx/Transactions.tsx'

const SellerDashboard = () => {
    return(
        <div className="h-screen">
          <div className="flex gap-3">
            <div className="w-[20%]">
              <Panel/>
            </div>
            <div className="w-[80%] h-full">
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/new/Product' element={<ProductForm/>}/>
                <Route path='/payment' element={<Payments/>}/>
                <Route path='/transaction' element={<Transactions/>}/>
              </Routes>
            </div>
          </div>
        </div>
    )
}

export default SellerDashboard