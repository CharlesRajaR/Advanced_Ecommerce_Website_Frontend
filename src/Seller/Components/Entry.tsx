import React from 'react'
import Register from './Register.tsx'
import LoginForm from './LoginForm.tsx'

const Entry = () => {
  return (
    <div className='h-[90vh]'>
      <div className="flex">
        <section className='pt-5 w-1/3'>
           {
            false ? <Register/> : <LoginForm/>
           }
        </section>
        <section className='w-2/3 flex justify-center h-screen items-center bg-gradient-to-tr from-blue-200 to-bg-teal-200'>
          <img  className='w-[80%] h-[80%]  object-contain' src='/Seller_Login.jpeg' alt='img'/>
        </section>
      </div>
    </div>
  )
}

export default Entry
