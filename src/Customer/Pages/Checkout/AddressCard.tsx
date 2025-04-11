import { Button, Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
     };
  return (
    <div className='w-full h-[200px] bg-teal-50 rounded-md shadow-sm shadow-teal-700'>
      <div className='px-5 py-3 flex flex-col'>
         <div className='flex justify-between'>
           <Radio
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
            />
            <Button variant='outlined' sx={{color:"red", fontWeight:"bold"}}>
                Remove
            </Button>
         </div>
         <div className='flex flex-col'>
               <p className='text-slate-50 font-semibold text-lg'>25/B, south car street, chidhambarapuram, Kalakad</p>
               <p className='text-slate-700 font-semibold text-lg'>Tirunelveli, TamilNadu, India</p>
               <p><strong>Mobile : 6381042076</strong></p>
               <p><strong>Zipcode : 627501</strong></p>
         </div>
      </div>
    </div>
  )
}

export default AddressCard
