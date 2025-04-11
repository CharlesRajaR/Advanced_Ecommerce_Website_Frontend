import { Edit } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'

const PersonalDetails = () => {
    const details = {
        fullname:"Charles Raja R",
        email:"rcr@gmail.com",
        mobile:"1234567890"
    }
  return (
    <div className='px-3 w-[70%]'>
        <div className="text-slate-900 flex justify-between font-bold text-2xl py-5">
            <p>Personal Details</p>
            <div>
                <Edit/>
            </div>
        </div>
        <div className=" flex shadow-md rounded-md shadow-slate-300 text-xl font-semibold text-white gap-3 flex-col w-full">
            <div className="bg-slate-300 flex hover:bg-slate-500 transition duration-500 justify-start gap-60 items-center px-5 py-3">
               <p>Name</p>
               <p>{details.fullname}</p>
            </div>
            <Divider/>
            <div className="flex bg-slate-300 hover:bg-slate-500 transition duration-500 justify-start gap-60 items-center px-5 py-3">
               <p>Email</p>
               <p >{details.email}</p>
            </div>
            <Divider/>
            <div className="flex justify-start hover:bg-slate-500 transition duration-500 bg-slate-300 gap-60 items-center px-5 py-3">
               <p>Mobile</p>
               <p>{details.mobile}</p>
            </div>
            <Divider/>
        </div>
    </div>
  )
}

export default PersonalDetails
