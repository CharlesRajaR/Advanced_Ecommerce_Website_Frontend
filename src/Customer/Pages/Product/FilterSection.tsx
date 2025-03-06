import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { colors } from './Data/colors.ts'
import { discount } from './Data/discount.ts'
import { price } from './Data/price.ts'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const FilterSection = () => {
  const [selectedColor, setSelectedColor] = useState();
  const [selectedPrice, setSelectedPrice] = useState();
  const [selectedDiscount, setSelectedDiscount] = useState();
  const [showLess, setShowLess] = useState(true);
  return (
    <div className='px-3'>
      <div className='pb-5 '>
        <p className=' text-center font-semibold text-xl text-slate-600'>Filter By</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="">
          <FormControl>
           <FormLabel className='pt-3 pb-5 text-center text-2xl font-semibold' >Colors</FormLabel>
           <RadioGroup 
           aria-labelledby='demo-radio-buttons-group-label'
           defaultValue={selectedColor}
           name='radio-buttons-group'
           >
            {
              colors.slice(0, showLess === true ? 5 : colors.length).map((item, index) =>{
           return(
                <div key={index} className="flex items-center">
                   <div>
                     <FormControlLabel className='text-slate-600 text-xl' value={item.hex} control={<Radio/>} label={item.name}/>
                   </div>
                   <div style={{backgroundColor:item.hex}}  className={`w-[15px] h-[15px] rounded-lg `}>

                   </div>
                </div>)
              })
            }
           </RadioGroup>
          </FormControl>
          <div className='flex items-center'>
              <Button onClick={() => setShowLess(!showLess)} style={{background:"none"}}>{showLess? 
               
              <p className='text-center items-center'>
                show more 
                <KeyboardArrowDown/>
              </p> :
              <p className='text-center items-center'>
                show less
                <KeyboardArrowUp/>
              </p>
               }
              </Button>
          </div>
        </div>
        <Divider/>
        <div className="">
          <FormControl>
           <FormLabel className='pt-3 pb-5 text-center text-2xl font-semibold' >Discount</FormLabel>
           <RadioGroup 
           aria-labelledby='demo-radio-buttons-group-label'
           defaultValue={selectedDiscount}
           name='radio-buttons-group'
           >
            {
              discount.map((item, index) =>{
           return(
                <div key={index} className="flex items-center">
                   <div>
                     <FormControlLabel className='text-slate-600 text-xl' value={item.value} control={<Radio/>} label={item.name}/>
                   </div>
                </div>)
              })
            }
           </RadioGroup>
          </FormControl>
        </div>
        <Divider/>
        <div className="">
          <FormControl>
           <FormLabel className='pt-3 pb-5 text-center text-2xl font-semibold' >Price</FormLabel>
           <RadioGroup 
           aria-labelledby='demo-radio-buttons-group-label'
           defaultValue={selectedPrice}
           name='radio-buttons-group'
           >
            {
              price.map((item, index) =>{
           return(
                <div key={index} className="flex items-center">
                   <div>
                     <FormControlLabel className='text-slate-600 text-xl' value={item.value} control={<Radio/>} label={item.name}/>
                   </div> 
                </div>)
              })
            }
           </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default FilterSection
