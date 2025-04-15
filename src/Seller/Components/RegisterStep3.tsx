import { TextField } from '@mui/material'
import React from 'react'

const RegisterStep3 = ({formik}) => {
  return (
    <div className='flex flex-col gap-3 py-3'>
          <p className='text-center text-xl font-bold'>Bank Details</p>
          <TextField
             name='bankDetails.accountNumber'
             label='Account Number'
             value={formik.values.bankDetails.accountNumber}
             onChange={formik.handleChange}
            />
            <TextField name='bankDetails.ifscCode'
            label='IFSC CODE'
            value={formik.values.bankDetails.ifscCode}
            onChange={formik.handleChange}
            />
            <TextField name='bankDetails.accountHolderName'
            label='Account Holder Name'
            value={formik.values.bankDetails.accountHolderName}
            onChange={formik.handleChange}
            />
        </div>
  )
}

export default RegisterStep3
