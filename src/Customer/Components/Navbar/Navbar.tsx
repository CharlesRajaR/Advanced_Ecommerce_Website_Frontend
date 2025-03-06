import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import Storefront from '@mui/icons-material/Storefront'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import React from 'react'
import Categorysheet from '../../Pages/Home/Categorysheet.tsx'
import {mainCategory} from '../../Pages/Home/Data/mainCategory.ts'
import { useState } from 'react'

const category:{[string]:[any]} = mainCategory;
const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  const[selectedCategory, setSelectedCategory] = useState("women");

  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className="z-50 sticky top-0 left-0 right-0">
        <Box sx={{zIndex:2}}>
          <div className="bg-white border-b-2 border-primary-color flex justify-between  items-center px-3 py-3">
            <div className="flex justify-center gap-5">
            <div className="flex justify-center">
                <div className="block md:hidden">
                  <IconButton>
                    <MenuIcon/>
                </IconButton>
                </div>
                
                <div className='logo text-[#00927c] text-lg font-semibold lg:text-3xl'>
                 Raja Bazaar
                 </div>
            </div>
            <div onMouseEnter = {()=>setHovered(true)} onMouseLeave = {()=>
            setHovered(false)}
             className="flex justify-between  gap-5  text-gray-500 text-xl">
              {
                category.map((item) => {
                  return(
<div  onMouseEnter = {()=>
  setSelectedCategory(item.categoryId)
}
className="hover:border-b-2 border-primary-color hover:text-primary-color">{item.name}</div>
                  )
                })
              }
              {
 hovered && <div onMouseEnter = {() => setHovered(true)} onMouseLeave = {() => setHovered(false)}
          className="absolute top-[4rem] left-20 right-20 shadow-lg border-x-2 border-y-2 border-slate-500">
              <Categorysheet selectedCategory={selectedCategory}/>
          </div>
          }
    </div>

        </div>
            <div className="flex justify-between items-center gap-3">
               <div className="">
                 <IconButton>
                   <SearchIcon/>
                 </IconButton>
               </div>
               <div className="">
                 <Button variant='contained'>
                    <Avatar></Avatar>
                    <p className='px-1 text-[1rem]'>Login</p>
                 </Button>
               </div>
               <div className="">
                <IconButton>
                    <FavoriteBorderIcon/>
                </IconButton>
               </div>
               <div className="">
                <IconButton>
                    <ShoppingCartIcon/>
                </IconButton>
               </div>
               <div className="text-xl cursor-pointer">
                <Button startIcon={<Storefront/>} variant='outlined'>Become Seller</Button>
                </div>
            </div>
          </div>
        </Box>
    </div>
    
  )
}

export default Navbar
