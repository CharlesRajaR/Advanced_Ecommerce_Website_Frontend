import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.tsx'
import Product from './Pages/Product/Product.tsx'
import Home from './Pages/Home/Home.tsx'
import ProductDetails from './Pages/ProductDetails/ProductDetails.tsx'
import Accounts from './Pages/Accounts/Accounts.tsx'
import Cart from './Pages/Cart/Cart.tsx'
import Checkout from './Pages/Checkout/Checkout.tsx'

const CustomerRouter = () => {
    
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:category/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/profile' element={<Accounts/>}/>
    </Routes>
    </>
  )
}

export default CustomerRouter
