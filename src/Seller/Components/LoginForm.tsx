import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const LoginForm = () => {
    const formik = useFormik({
        initialValues:{
           email:"",
           otp:""
        },
        onSubmit:(values) => {
            console.log(values);
        }
    })
   return(
       <div className="flex flex-col gap-7">
         <p className='text-center text-xl font-bold text-teal-500'>
            Login As Seller
         </p>
         <div className="flex flex-col gap-2 px-2">
           <TextField name='email' style={{width:"100%"}}
           label='email' value={formik.values.email} onChange={formik.handleChange}
           />
           {
            true && <TextField name='otp' style={{width:"100%"}}
           label='OTP' value={formik.values.otp} onChange={formik.handleChange}
           />
           }
           {
            true ? 
            <Button variant='contained' fullWidth>
                SENT OTP
            </Button>:
            <Button variant='contained' fullWidth >
                LOGIN
            </Button>
           }
         </div>
         <div className="flex flex-col gap-2 px-2">
          <p className='text-center font-sm font-semibold text-slate-600'>Don't have an account?</p>
          <Button variant='outlined' fullWidth>REGISTER</Button>
         </div>
       </div>
   )
}

export default LoginForm