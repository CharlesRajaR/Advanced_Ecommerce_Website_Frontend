import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PersonalDetails from './PersonalDetails.tsx'
import Orders from './Orders.tsx'
import OrderDetails from './OrderDetails.jsx'

const Accounts = () => {
    const [currentPage, setCurrentPage] = useState("Profile")
    const navigate = useNavigate()
    const list = [
        {
            title:"Orders",
            path:'/orders'
        },
        {
            title:"Profile",
            path:'/profile'
        },
        {
            title:"Saved Cards",
            path:'/cards'
        },
        {
            title:"Address",
            path:'/address'
        },
        {
            title:"Logout",
            path:'/logout'
        },
    ]
  return (
    <div className='px-5 min-h-screen'>
      <div>
        {false && <div className='text-2xl font-bold text-teal-500'>
          Charles Raja R
        </div>}
        <div className='grid grid-cols-3 gap-5'>
            <div className="col-span-1 pt-5 flex flex-col shadow-sm shadow-slate-100 
            text-lg font-semibold text-slate-700">
              {
                list.map((item, i) => {
                    return(
                        <div key={i} onClick={
                            () => {
                              setCurrentPage(item.title)
                              navigate(item.path)
                            }
                        }
                         className={` ${currentPage === item.title? "bg-teal-400" : ""}
                            hover:text-white rounded-md transition duration-500 hover:bg-teal-400 cursor-pointer`}>
                         <p className='px-5 py-3'>{item.title}</p>
                        </div>
                    )
                })
              }
            </div>
            <div className="col-span-2 pt-5 w-[90%] px-3">
              {/* <PersonalDetails/> */}
              {/* <Orders/> */}
              <OrderDetails/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Accounts
