import { Button, Grid2, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const CouponForm = () => {
    const formik = useFormik({
        initialValues:{
            couponCode:"",
            discount:"",
            startDate:"",
            endDate:"",
            minOrderValue:""
        },
        onSubmit:(value)=>{
           console.log(value)
           formik.resetForm();
        }
    })
  return (
    <div className='flex flex-col justify-center items-center w-1/2'>
      <p className='text-3xl font-bold my-5'>Add New Coupon</p>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
           <Grid2 size={6}>
              <TextField fullWidth name='couponCode' label='Coupon Code' value={formik.values.couponCode}
              onChange={formik.handleChange}
              />
           </Grid2>
           <Grid2 size={6}>
            <TextField fullWidth name='discount' label='Discount' value={formik.values.discount}
              onChange={formik.handleChange}
              />
           </Grid2>
           <Grid2 size={6}>
              <TextField fullWidth name='startDate' placeholder='DD-MM-YYYY' label='Start Date' value={formik.values.startDate}
              onChange={formik.handleChange}
              />
           </Grid2>
           <Grid2 size={6}>
<TextField fullWidth name='endDate' label='End Date' placeholder='DD-MM-YYYY' value={formik.values.endDate}
              onChange={formik.handleChange}
              />
           </Grid2>
           <Grid2 size={12}>
<TextField fullWidth name='minOrderValue' label='Minimum Order Value' value={formik.values.minOrderValue}
              onChange={formik.handleChange}
              />
           </Grid2>
           <Grid2 size={12}>
             <Button variant='contained' fullWidth type='submit'>CREATE COUPON</Button>
           </Grid2>
        </Grid2>
      </form>
    </div>
  )
}

export default CouponForm