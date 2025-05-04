import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const DealForm = () => {
    const formik = useFormik({
        initialValues:{
            discount:"",
            category:""
        },
        onSubmit:()=>{}
    })
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <form  onSubmit={formik.handleSubmit} className='flex w-[50%] flex-col gap-3'>
        <p className='text-3xl text-center font-bold'>Create Deal</p>
        <TextField fullWidth
        label='Discount'
        name='discount'
        value={formik.values.discount}
        onChange={formik.handleChange}
        />
        <TextField
        value={formik.values.category}
        onChange={formik.handleChange}
        label="category"
        name='category'
        />
        <Button type='submit' variant='contained'>Create Deal</Button>
      </form>
    </div>
  )
}

export default DealForm