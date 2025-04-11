import { Add } from '@mui/icons-material'
import { Box, Button, Divider, FormControlLabel, IconButton, Modal, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from './AddressCard.tsx'
import AddressForm from './AddressForm.tsx'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const options = [
    {
      label:"razorpay",
      value:"razorpay",
      img:'/razorpay.png'
    },
    {
      label:"stripe",
      value:"stripe",
      img:'/stripe.jpeg'
    }
  ]
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='px-5 py-5 min-h-screen'>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
             <AddressForm/>
          </Box>
        </div>
      </Modal>
      <div className="grid grid-cols-3 gap-5">
        <div className='col-span-2 flex flex-col gap-3'>
            <div>
                <p className='font-bold text-teal-400 text-2xl'>SELECT DELIVERY ADDRESS</p>
            </div>
            <div className='flex justify-between items-center'>
               <div>
                <p className='font-bold text-teal-500 text-xl'>Select Address</p>
               </div>
               <div className="">
                  <IconButton>
                    <Button onClick={handleOpen} variant='outlined' color='primary'>
                        Add New Address
                    </Button>
                  </IconButton>
               </div>
            </div>
            <div className='flex flex-col gap-5'>
              {
                [1,1,1,1,1].map((item, i)=>{
                    return(
                        <div key={i}>
                          <AddressCard/>
                        </div>
                    )
                })
              }
            </div>
            <div className='mt-5'>
              
                    <Button onClick={handleOpen} variant='outlined' color='primary' startIcon={<Add/>}>
                        Add New Address
                    </Button>
               
            </div>
        </div>
        <div className="col-span-1 ">
           <div className='shadow-slate-500 shadow-sm rounded-md w-[80%] p-3 flex flex-col gap-3'>
              <div className="">
                <p className='text-center font-semibold text-2xl text-teal-500 py-3'>CHOOSE PAYMENT GATEWAY</p>
              </div>
              <div className="flex">
                <RadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  {
                    options.map((item) => {
                      return(
                        <FormControlLabel 
                        key={item.label}
                        value={item.value}
                        control={<Radio/>}
                        label={
                          <div>
                            <img src={item.img} alt="img" />
                          </div>
                        }
                        />
                      )
                    })
                  }
                </RadioGroup>
              </div>
              <div className="flex flex-col gap-1 text-lg font-semibold text-slate-500">
                 <div className="flex justify-between items-center">
                     <p>SubTotal</p>
                     <p><strong>₹</strong>1000</p>
                 </div>
                 <div className="flex justify-between items-center">
                     <p>Discount</p>
                     <p><strong>₹</strong>1000</p>
                 </div>
                 <div className="flex justify-between items-center">
                     <p>Shipping</p>
                     <p><strong>₹</strong>1000</p>
                 </div>
                 <div className="flex justify-between items-center">
                     <p>Platform Fee</p>
                     <p><strong>₹</strong>1000</p>
                 </div>
              </div>
              <Divider/>
              <div className='flex justify-between items-center text-bold text-lg text-slate-900'>
                <p>Total</p>
                <p><strong>₹</strong>5000</p>
              </div>
              <div>
                <Button variant='contained' fullWidth>
                  CHECKOUT
                </Button>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
