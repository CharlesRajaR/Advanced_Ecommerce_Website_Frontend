import React from 'react'
import ElectricCard from './ElectricCard.tsx'

const ElectricCategory = () => {
  return (
    <div className='flex justify-between px-3 py-3'>
      {
        [1,1,1,1,1,1,1,1,1].map((items) => <ElectricCard/>)
      }
    </div>
  )
}

export default ElectricCategory
