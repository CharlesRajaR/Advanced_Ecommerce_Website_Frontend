import React from 'react'
import { Box } from '@mui/material'
import { menLevelTwo } from './Data/LevelTwo/menLevelTwo.ts'
import { womenLevelTwo } from './Data/LevelTwo/womenLevelTwo.ts'
import { furnitureLevelTwo } from './Data/LevelTwo/furnitureLevelTwo.ts'
import { electronicsLevelTwo } from './Data/LevelTwo/electronicsLevelTwo.ts'
import { menLevelThree } from './Data/LevelThree/menLevelThree.ts'
import { womenLevelThree } from './Data/LevelThree/womenLevelThree.ts'
import { furnitureLevelThree } from './Data/LevelThree/furnitureLevelThree.ts'
import { electronicsLevelThree } from './Data/LevelThree/electronicsLevelThree.ts'

const categorytwo:{[key:string]:any[]} = {
    men:menLevelTwo,
    women:womenLevelTwo,
    furniture:furnitureLevelTwo,
    electronics:electronicsLevelTwo
}

const categorythree:{[key:string]:any[]} = {
    men:menLevelThree,
    women:womenLevelThree,
    furniture:furnitureLevelThree,
    electronics:electronicsLevelThree
}

const Categorysheet = ({selectedCategory}) => {
  const childCategory = (category:any, parentcategoryId:any) => {
     return category.filter((child:any) => child.parentcategoryId === parentcategoryId);
  }
  return (
    <Box sx={{zIndex:2}}>
       <div className="bg-white flex md:justify-between flex-col md:flex-row md:flex-wrap h-[500px] shadow-lg overflow-y-auto ">
        {
          categorytwo[selectedCategory]?.map((item, index) => {
            return(
              <div className={`px-5 py-5 md:w-1/5 ${index % 2 === 1 ? "bg-slate-100" :"bg-slate-50"}`}>
                <p className='text-2xl py-3 font-semibold text-center text-primary-color'>{item.name}</p>
                <ul className='space-y-3 items-center'>
                  {  
                   childCategory(categorythree[selectedCategory], item.categoryId)?.map((item) => {
                    return(
                      <li className='cursor-pointer text-sm lg:text-xl  text-center hover:text-primary-color'>{item.name}</li>
                    )
                   })
                 }
                </ul>
              </div>
            )
          })
        }
       </div>
    </Box>
  )
}

export default Categorysheet
