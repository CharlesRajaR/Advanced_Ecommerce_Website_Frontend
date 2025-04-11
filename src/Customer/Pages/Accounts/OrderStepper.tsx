import { CheckCircle, FiberManualRecord } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'

const OrderStepper = ({orderStatus}) => {
    const steps = [
        {name:"Order Placed", description:"description", value:"PLACED"},
        {name:"Packed", description:"description", value:"CONFIRMED"},
        {name:"Shipped", description:"description", value:"SHIPPED"},
        {name:"Arriving", description:"description", value:"ARRIVING"},
        {name:"Arrived", description:"description", value:"ARRIVED"}
    ]

    const canceledStep = [
        {name:"Order Placed", description:"description", value:"PLACED"},
        {name:"Canceled", description:"description", value:"CANCELED"},
    ]

    const currentStep = 2;

    const [status , setStatus] = useState(steps)

    useEffect(()=>{
         if(orderStatus === 'canceled'){
            setStatus(canceledStep)
         }
         else{
            setStatus(steps)
         }
    }, [orderStatus])
  return (
    <div>
      {
        status.map((item, i) => {
            return(
               <div className="flex justify-start pl-6 w-[80%]">
                    <div key={i} className='flex flex-col items-center'>
                    <div className="">
                     <Box className={`w-10 h-10 rounded-full  ${i <= currentStep ? "bg-white text-primary-color":
                    "bg-white text-gray-500"} items-center justify-center z-10`}>
                   {
                    item.value === orderStatus 
                    ?
                    (
                      <CheckCircle sx={{width:'100%', height:'100%'}}/>
                    )
                    :(<FiberManualRecord sx={{width:'100%', height:'100%'}}/>)
                   }
                </Box>
                    </div>
               
                {
                    i < status.length - 1 && (
                        <div className={`h-20 w-[2px] ${i < currentStep ? "bg-teal-500"
                            :"bg-gray-300 text-gray-500"
                        }`}>
                        </div>
                    )
                }

                    </div>
                    <div className={`ml-2 shadow-md ${i <= currentStep 
                    ?"shadow-emerald-500":"shadow-slate-500"} flex hover:bg-teal-100 transition duration-500
                     rounded-md border-slate-100 border-x-2 border-y-2 justify-center  items-center flex-col gap-1 w-full h-[50%]
                        ${i !== currentStep 
                         ?
                        "text-slate-700"
                        :"bg-teal-200 text-slate-700 rounded-md"
                        }`}>
                        <p className='font-semibold text-xl px-3'>{item.value}</p>
                        <p className='font-thin text-sm px-3'>{item.description}</p>
                    </div>
               </div>
                
            )
        })
      }
    </div>
  )
}

export default OrderStepper
