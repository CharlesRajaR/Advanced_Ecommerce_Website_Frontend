import { AccountBox, Add, Category, Dashboard, ElectricBolt, Home, IntegrationInstructions, LocalOffer, Logout } from '@mui/icons-material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const menu1 = [
    {
        name:"Dashboard",
        path:"/admin",
        icon:<Dashboard className='text-primary-color'/>,
        activateIcon:<Dashboard className='text-white'/>

    },
    {
        name:"Coupons",
        path:"/admin/coupons",
        icon:<IntegrationInstructions className='text-primary-color'/>,
        activateIcon:<IntegrationInstructions className='text-white'/>
    },
    {
        name:"AddNewCoupons",
        path:"/admin/new/coupons",
        icon:<Add className='text-primary-color'/>,
        activateIcon:<Add className='text-white'/>
    },
    {
        name:"HomePage",
        path:"/admin/home",
        icon:<Home className='text-primary-color'/>,
        activateIcon:<Home className='text-white'/>
    },
    {
        name:"ElectronicsCategory",
        path:"/admin/electronics/category",
        icon:<ElectricBolt className='text-primary-color'/>,
        activateIcon:<ElectricBolt className='text-white'/>
    },
    {
        name:"Shop By Category",
        path:"/admin/shop/category",
        icon:<Category className='text-primary-color'/>,
        activateIcon:<Category className='text-white'/>
    },
    {
        name:"Deals",
        path:"/admin/deals",
        icon:<LocalOffer className='text-primary-color'/>,
        activateIcon:<LocalOffer className='text-white'/>
    }
]

const menu2 = [
    {
        name:"Account",
        path:"/admin/account",
        icon:<AccountBox className='text-primary-color'/>,
        activateIcon:<AccountBox className='text-white'/>
    },
    {
        name:"Logout",
        path:"/",
        icon:<Logout className='text-primary-color'/>,
        activateIcon:<Logout className='text-white'/>
    }
]

const Panel = () => {
    const navigate = useNavigate();
    const[page, setPage] = useState("Dashboard")
  return (
    <div className='h-screen'>
    <div className='md:flex flex-col justify-between h-full hidden  md:fixed'>
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
                     rounded-r-full items-center py-3 px-7  font-semibold hover:text-white`}>
                        <p className='px-5 text-xl'>{item.icon}</p>
                        <p className='text-xl'>{item.name}</p>
                    </div>
                )
            })
           }
        </div>
        <div className="flex flex-col cursor-pointer">
           {
            menu2.map((item, i) => {
                return(
                    <div key={i} onClick={() =>{
                        navigate(item.path)
                        setPage(item.name)
                    }}
                     className={`flex gap-2 hover:bg-teal-300 transition duration-300
                     rounded-r-full py-3 items-center px-7  font-semibold hover:text-white`}>
                        <p className='px-5 text-xl'>{item.icon}</p>
                        <p className='text-xl'>{item.name}</p>
                    </div>
                )
            })
           }
        </div>
    </div>
    </div>
  )
}

export default Panel
