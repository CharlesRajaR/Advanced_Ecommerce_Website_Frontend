import { TextField } from '@mui/material'
import React from 'react'

const RegisterStep1 = ({formik}) => {
  return (
    <div className='flex flex-col gap-3 py-3'>
      <p className='text-center text-xl font-bold'>Contact Details</p>
      <TextField
         name='mobile'
         label='Mobile'
         value={formik.values.Mobile}
         onChange={formik.handleChange}
        />
        <TextField name='gstin'
        label='GSTIN'
        value={formik.values.gstin}
        onChange={formik.handleChange}
        />
    </div>
  )
}

export default RegisterStep1
