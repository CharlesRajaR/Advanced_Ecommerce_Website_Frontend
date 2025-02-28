import React from 'react'

const SellerCard = () => {
  return (
    <div className='pt-5  pl-3 pr-3'>
      <div className="w-[95vw] h-[500px] relative">
          <img className='w-full h-full object-cover' src="https://thumbs.dreamstime.com/z/photo-woman-cardboard-box-hands-standing-new-apartment-photo-woman-cardboard-box-hands-standing-134944676.jpg" alt="" />
          <p className='absolute top-52 left-7 text-7xl text-center text-bold text-black logo'>
            Begin your selling journey in <span className='text-blue-950'>Raja Bazaar</span> 
          </p>
          <button className='absolute left-72 top-72 text-2xl text-bold px-7 hover:text-3xl py-1 text-white hover:bg-green-600 bg-primary-color border-x-4 border-y-4 hover:border-blue-950 rounded-md border-black'>
             Start {'->'}
          </button>
          
      </div>
    </div>
  )
}

export default SellerCard
