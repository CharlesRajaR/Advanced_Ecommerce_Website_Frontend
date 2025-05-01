import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import customTheme from './Theme/CustomTheme.ts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Router, Routes } from 'react-router-dom';
import SellerRouter from './Seller/SellerRouter.tsx';
import CustomerRouter from './Customer/CustomerRouter.tsx';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
           <Routes>
            <Route path='/' element={<CustomerRouter/>}/>
            <Route path='/seller/*' element={<SellerRouter/>}/>
           </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
