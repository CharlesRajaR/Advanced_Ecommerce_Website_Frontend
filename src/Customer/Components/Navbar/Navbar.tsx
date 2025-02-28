import { Avatar, Box, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import React from 'react'

const Navbar = () => {
  return (
    <div className="">
        <Box>
          <div className="flex justify-between  items-center px-3 py-3">
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
            <div className="flex justify-between  gap-5  text-gray-500 text-xl">
                <div className="hover:border-b-2 border-primary-color hover:text-primary-color">Men</div>
                <div className="hover:border-b-2 border-primary-color hover:text-primary-color">Women</div>
                <div className="hover:border-b-2 border-primary-color hover:text-primary-color">Home & Furniture</div>
                <div className="hover:border-b-2 border-primary-color hover:text-primary-color">Electronics</div>
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
                <Button variant='outlined'>Become Seller</Button>
                </div>
            </div>
          </div>
        </Box>
    </div>
    
  )
}

export default Navbar
