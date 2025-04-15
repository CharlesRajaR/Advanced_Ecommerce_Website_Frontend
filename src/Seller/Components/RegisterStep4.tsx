import { TextField } from '@mui/material'
import React from 'react'

const RegisterStep4 = ({formik}) => {
  return (
    <div className='flex flex-col gap-3 py-3'>
              <p className='text-center text-xl font-bold'>Business Details</p>
              <TextField
                 name='businessDetails.businessName'
                 label='Business Name'
                 value={formik.values.businessDetails.businessName}
                 onChange={formik.handleChange}
                />
                <TextField
                 name='selleName'
                 label='Seller Name'
                 value={formik.values.sellerName}
                 onChange={formik.handleChange}
                />
                <TextField
                 name='email'
                 label='Email'
                 value={formik.values.email}
                 onChange={formik.handleChange}
                />
                <TextField
                 name='password'
                 label='Password'
                 value={formik.values.password}
                 onChange={formik.handleChange}
                />
    </div>
  )
}

export default RegisterStep4
