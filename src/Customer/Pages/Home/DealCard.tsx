import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[150px] h-[200px]'>
      <div className='border-x-2 border-y-2 border-primary-color'>
        <img className='w-full object-cover' src="https://th.bing.com/th/id/OIP.soJAxi0vZKiekRIwv4LOmwHaJ_?rs=1&pid=ImgDetMain" alt="" />
      </div>
      <div className='bg-black text-white text-center'>
         <p>Bags</p>
         <p>20% OFF</p>
         <p>shop now</p>
      </div>
    </div>
  )
}

export default DealCard
