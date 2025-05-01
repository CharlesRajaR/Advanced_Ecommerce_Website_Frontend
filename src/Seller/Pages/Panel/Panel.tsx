import React, { useState } from 'react'
import { AccountBalanceWallet, AccountBox, Add, Dashboard, Inventory, Logout, Receipt, ShoppingBag } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const Panel = () => {
    const [page, setPage] = useState("Dashboard");

    const menu1 = [
        {
            name:"Dashboard",
            path:"/seller",
            icon:<Dashboard className='text-teal-500'/>,
            activeicon:<Dashboard className='text-white'/>
        },
        {
            name:"Orders",
            path:"/seller/orders",
            icon:<ShoppingBag className='text-teal-500'/>,
            activeicon:<ShoppingBag className='text-white'/>
        },
        {
            name:"products",
            path:"/seller/products",
            icon:<Inventory className='text-teal-500'/>,
            activeicon:<Inventory className='text-white'/>
        },
        {
            name:"Add Product",
            path:"/seller/new/product",
            icon:<Add className='text-teal-500'/>,
            activeicon:<Add className='text-white'/>
        },
        {
            name:"Payment",
            path:"/seller/payment",
            icon:<AccountBalanceWallet className='text-teal-500'/>,
            activeicon:<AccountBalanceWallet className='text-white'/>
        },
        {
            name:"Transaction",
            path:"/seller/transaction",
            icon:<Receipt className='text-teal-500'/>,
            activeicon:<Receipt className='text-white'/>
        }
    ]

    const menu2 = [
        {
            name:"Account",
            path:"/seller/account",
            icon:<AccountBox className='text-teal-500'/>,
            activeicon:<AccountBox className='text-white'/>
        },
        {
            name:"Logout",
            path:"/",
            icon:<Logout className='text-teal-500'/>,
            activeicon:<Logout className='text-white'/>
        }
    ]

const navigate = useNavigate();
 return(
    <div className="w-full pl-5 py-3 flex flex-col justify-between h-screen">
        <div className="flex flex-col cursor-pointer">
           {
            menu1.map((item, i) => {
                return(
                    <div key={i} onClick={() =>{
                        navigate(item.path)
                        setPage(item.name)
                    }}
                     className={`${page == item.name ? "bg-teal-400":""}
                        flex gap-2 hover:bg-teal-400 transition duration-300
                     rounded-r-full items-center py-3  font-semibold hover:text-white`}>
                        <p className='px-5 text-3xl'>{item.icon}</p>
                        <p className='text-3xl'>{item.name}</p>
                    </div>
                )
            })
           }
        </div>
        <div className="flex flex-col cursor-pointer gap-3">
           {
            menu2.map((item, i) => {
                return(
                    <div key={i} onClick={() =>{
                        navigate(item.path)
                        setPage(item.name)
                    }}
                     className={`flex gap-2 hover:bg-teal-300 transition duration-300
                     rounded-r-full py-3 items-center  font-semibold hover:text-white`}>
                        <p className='px-5 text-3xl'>{item.icon}</p>
                        <p className='text-3xl'>{item.name}</p>
                    </div>
                )
            })
           }
        </div>
    </div>
 )
}

export default Panel