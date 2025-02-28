import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import customTheme from './Theme/CustomTheme.ts';
import Navbar from './Customer/Components/Navbar/Navbar.tsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Customer/Pages/Home/Home.tsx';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar/>
        <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
