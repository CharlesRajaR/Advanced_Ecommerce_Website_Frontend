import React from 'react'
import './Home.css'

const CategoryCard = () => {
  return (
    <div className=''>
      <div className='w-[125px] h-[125px]'>
        <img className='w-full h-full border-x-4 border-y-4 border-primary-color rounded-full object-cover' src="https://th.bing.com/th/id/OIP.soJAxi0vZKiekRIwv4LOmwHaJ_?rs=1&pid=ImgDetMain" alt="" />
      </div>
      <p className='text-xl text-primary-color text-center'>watch</p>
    </div>
  )
}

export default CategoryCard
