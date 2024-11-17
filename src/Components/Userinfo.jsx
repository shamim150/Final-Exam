import React from 'react'

const Userinfo = () => {
  return (
    <div className='relative'>     
      <img className  ='aspect-square size-[72px] relative' src="/Profile.png" alt="" />
      <h1 className='font-semibold text-3xl text-white leading-9'>Samantha</h1>
      <a className='text-base text-white/60  ' href="mailto:samantha@email.com">samantha@email.com</a>

      <div className='absolute h-6 w-6 bg-red-600 top-0 -translate-y-2 left-[35%]  rounded-full flex items-center justify-center'>
        <p className='text-white'>4</p>

      </div>
    </div>
  )
}

export default Userinfo