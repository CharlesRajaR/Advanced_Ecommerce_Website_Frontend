import { TextField } from '@mui/material'
import React from 'react'

const RegisterStep2 = ({formik}) => {
  return (
     <div className='flex flex-col gap-3 py-3'>
          <p className='text-center text-xl font-bold'>Address Details</p>
          <TextField
             name='pickupAddress.name'
             label='Name'
             value={formik.values.pickupAddress.name}
             onChange={formik.handleChange}/>
            <div className="flex justify-between">
            <TextField name='pickupAddress.mobile' style={{width:'40%'}}
            label='mobile'
            value={formik.values.pickupAddress.mobile}
            onChange={formik.handleChange}
            />
            <TextField name='pickupAddress.pincode' style={{width:'50%'}}
            label='Pincode'
            value={formik.values.pickupAddress.pincode}
            onChange={formik.handleChange}
            />
            </div>
            <TextField name='pickupAddress.address'
            label='Address'
            value={formik.values.pickupAddress.address}
            onChange={formik.handleChange}
            />
            <div className="flex justify-between">
            <TextField name='pickupAddress.city' style={{width:'45%'}}
            label='City'
            value={formik.values.pickupAddress.city}
            onChange={formik.handleChange}
            />
            <TextField name='pickupAddress.state' style={{width:'45%'}}
            label='State'
            value={formik.values.pickupAddress.state}
            onChange={formik.handleChange}
            />
          </div>
        </div>
  )
}

export default RegisterStep2
