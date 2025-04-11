import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Grid2, TextField } from '@mui/material';

const AddressFormSchema = Yup.object().shape({
  name:Yup.string().required("Name is required"),
  mobile:Yup.string().required("Mobile number is required").matches(/^[6-9]\d{9}$/, "invalid mobile number"),
  pincode:Yup.string().required("pin code is required").matches(/^[0-9]{6}$/, "invalid pincode"),
  address:Yup.string().required("address is required"),
  city:Yup.string().required("city is required"),
  state:Yup.string().required("state is required"),
  locality:Yup.string().required("locality is required")
});

const AddressForm = () => {
  const formik = useFormik({
      initialValues: {
        name:'',
        mobile:'',
        pincode:'',
        address:'',
        city:'',
        state:'',
        locality:''
      },
      validationSchema:AddressFormSchema,
      onSubmit: (values) => {
         console.log(values);
      }
  })

  return (
    <>
     <p className='font-bold text-2xl text-center text-teal-400'>Contact Details</p>
     <form onSubmit={formik.handleSubmit} className='mt-5'>
      <Grid2 container spacing={3}>

        <Grid2 size={{xs:12}}>
        <TextField fullWidth
         name='name'
         label='Name'
         value={formik.values.name}
         onChange={formik.handleChange}
         error={formik.touched.name && Boolean(formik.errors.name)}
         helperText={formik.touched.name && formik.errors.name}
        />
       </Grid2>

        <Grid2 size={{xs:12}}>
        <TextField fullWidth
         name='mobile'
         label='Mobile'
         value={formik.values.mobile}
         onChange={formik.handleChange}
         error={formik.touched.mobile && Boolean(formik.errors.mobile)}
         helperText={formik.touched.mobile && formik.errors.mobile}
        />
       </Grid2>

       <Grid2 size={{xs:12}}>
        <TextField fullWidth
         name='address'
         label='Address'
         value={formik.values.address}
         onChange={formik.handleChange}
         error={formik.touched.address && Boolean(formik.errors.address)}
         helperText={formik.touched.address && formik.errors.address}
        />
       </Grid2>

        <Grid2 size={{xs:6}}>
        <TextField fullWidth
         name='pincode'
         label='Pincode'
         value={formik.values.pincode}
         onChange={formik.handleChange}
         error={formik.touched.pincode && Boolean(formik.errors.pincode)}
         helperText={formik.touched.pincode && formik.errors.pincode}
        />
       </Grid2>

       <Grid2 size={{xs:6}}>
        <TextField fullWidth
         name='city'
         label='City'
         value={formik.values.city}
         onChange={formik.handleChange}
         error={formik.touched.city && Boolean(formik.errors.city)}
         helperText={formik.touched.city && formik.errors.city}
        />
       </Grid2>

       <Grid2 size={{xs:6}}>
        <TextField fullWidth
         name='state'
         label='State'
         value={formik.values.state}
         onChange={formik.handleChange}
         error={formik.touched.state && Boolean(formik.errors.state)}
         helperText={formik.touched.state && formik.errors.state}
        />
       </Grid2>

       <Grid2 size={{xs:6}}>
        <TextField fullWidth
         name='locality'
         label='Locality'
         value={formik.values.locality}
         onChange={formik.handleChange}
         error={formik.touched.locality && Boolean(formik.errors.locality)}
         helperText={formik.touched.locality && formik.errors.locality}
        />
       </Grid2>
      </Grid2>
      <Button variant='contained' fullWidth type='submit' style={{marginTop:15}}>
        Add Address
      </Button>
    </form>
    </>
    
  )
}

export default AddressForm
