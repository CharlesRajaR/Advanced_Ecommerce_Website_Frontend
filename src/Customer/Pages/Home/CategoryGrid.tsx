import React from 'react'

const CategoryGrid = () => {
  return (
    <div className='px-3 py-3 '>
      <div className='grid grid-cols-12 grid-rows-12 gap-x-1 h-[30rem] gap-y-1'>
        <div className='row-span-12 col-span-3 bg-primary-color'>
            <img className='w-full h-full object-cover object-top rounded-md' src="https://th.bing.com/th/id/OIP.BVtjNhPPn6rspiFl3cVsdwHaJ4?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <div className='row-span-6 col-span-2 bg-primary-color'>
            <img className='w-full h-full object-cover object-top rounded-md' src="https://i.etsystatic.com/26521752/r/il/67d073/2819813185/il_1588xN.2819813185_9u8p.jpg" alt="" />
        </div>
        <div className='row-span-6 col-span-4 bg-primary-color'>
            <img className='w-full h-full object-cover object-top rounded-md' src="https://5.imimg.com/data5/ANDROID/Default/2021/6/UV/XN/EC/71772596/product-jpeg.jpg" alt="" />
        </div>
        <div className='row-span-12 col-span-3 bg-primary-color'>
            <img className='w-full h-full object-cover object-top rounded-md' src="https://th.bing.com/th/id/OIP.4WWdSbw79C_f3xTWNu07BAHaLH?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <div className='row-span-6 col-span-4 bg-primary-color'>
            <img className='w-full h-full object-cover object-top rounded-md' src="https://th.bing.com/th/id/OIP.ls2Z6NZx4jFWfbwqxt5YigHaHa?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <div className='row-span-6 col-span-2 bg-primary-color'>
            <img className='w-full h-full object-cover object-top rounded-md' src="https://th.bing.com/th/id/OIP.GU-gRNeR9CKEluaTq4iahQHaJr?rs=1&pid=ImgDetMain" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CategoryGrid
