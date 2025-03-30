import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { colors } from './Data/colors.ts'
import { discount } from './Data/discount.ts'
import { price } from './Data/price.ts'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';

const FilterSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedPrice, setSelectedPrice] = useState();
  const [selectedDiscount, setSelectedDiscount] = useState();
  const [showLess, setShowLess] = useState(true);

  const updateFilterParams = (e:any) => {
    const {value, name} = e.target;
    if(value){
      searchParams.set(name, value);
    }
    else{
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  }

  const clearAllFilters = () => {
    setSearchParams({});
  }

  return (
    <div className='px-3'>
      <div className='pb-5 flex justify-between'>
        <p className=' text-center font-semibold text-xl text-slate-600'>Filter By</p>
        <Button variant='outlined' onClick={clearAllFilters}>
          Clear All
        </Button>
      </div>
      <div className="flex flex-col items-left">
        <div className="">
          <FormControl>
            <div className='text-2xl font-semibold text-slate-500'>Colors</div>
           <RadioGroup onClick={updateFilterParams}
           aria-labelledby='demo-radio-buttons-group-label'
           defaultValue={selectedColor}
           name='color'
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
           <div className='text-2xl font-semibold text-slate-500'>Discount</div>
           <RadioGroup onClick={updateFilterParams}
           aria-labelledby='demo-radio-buttons-group-label'
           defaultValue={selectedDiscount}
           name='discount'
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
           <div className='text-2xl font-semibold text-slate-500'>Price</div>
           <RadioGroup onClick={updateFilterParams}
           aria-labelledby='demo-radio-buttons-group-label'
           defaultValue={selectedPrice}
           name='price'
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
