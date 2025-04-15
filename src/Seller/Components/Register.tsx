import { Box, Button, Divider, Step, StepLabel, Stepper } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import RegisterStep1 from './RegisterStep1.tsx';
import RegisterStep2 from './RegisterStep2.tsx';
import RegisterStep4 from './RegisterStep4.tsx';
import RegisterStep3 from './RegisterStep3.tsx';



const Register = () => {
  const formik = useFormik({
    initialValues:{
      mobile:"",
      otp:"",
      gstin:"",
      pickupAddress:{
        name:"",
        mobile:"",
        pincode:"",
        address:"",
        locality:"",
        city:"",
        state:""
      },
      bankDetails:{
        accountNumber:"",
        ifscCode:"",
        accountHolderName:""
      },
      sellerName:"",
      email:"",
      businessDetails:{
        businessName:"",
        businessEmail:"",
        businessMobile:"",
        logo:"",
        banner:"",
        businesaddress:""
      },
      password:""
    },
    onSubmit:(values) => {
      console.log(values);
    }
  })

    const steps = [
        "Tax Details and Mobile",
        "pick up address",
        "Bank details",
        "Supplier Details"
    ]


    const [curStep, setCurStep] = useState(1);
    const updateStep = (value:number) => {
      if(value === -1 && curStep > 1){
        setCurStep(curStep + value);
      }
      if(value === 1 && curStep < steps.length){
        setCurStep(curStep + value)
      }
    }
  return (
    <div className='flex flex-col gap-5'>
      <div className="flex flex-col gap-3">
        <div className="">
          <Box sx={{ width: '100%' }}>
             <Stepper activeStep={curStep} alternativeLabel>
              {steps.map((label) => (
             <Step key={label}>
             <StepLabel>{label}</StepLabel>
             </Step>
            ))}
           </Stepper>
         </Box>
        </div>
        <Divider/>
        <div className="px-3">
          {
            curStep === 1? <RegisterStep1 formik={formik}/> : 
            curStep === 2? <RegisterStep2 formik={formik}/> :
            curStep === 3? <RegisterStep3 formik={formik}/> : <RegisterStep4 formik={formik}/>
          }
        </div>
        <div className='flex justify-between px-3'>
          <Button onClick={() => updateStep(-1)} disabled={curStep === 1} variant='contained'>
            Back
          </Button>
          <Button onClick={() =>{
              updateStep(1);
              if(curStep === steps.length){
                formik.handleSubmit();
              }
          }}>
          {curStep === steps.length ? "Create Account" : " Next "}
          </Button>
        </div>
      </div>
      <div className="px-3">
         <p className='text-center text-sm font-bold py-3'>Already have account?</p>
         <Button variant='outlined' fullWidth>LOGIN</Button>
      </div>
    </div>
  )
}

export default Register
