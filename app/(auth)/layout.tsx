import Image from 'next/image'
import React from 'react'

export default function AuthLayout( {children} ) {
  return (
    <div className='grid lg:grid-cols-2 h-full items-center justify-center'>
      <div className='flex items-center justify-center'>{children}</div>
      <div className='hidden lg:flex lg:lg-slate-300 h-full justify-center items-center lg:flex-col'>
        <Image src='/logo.svg' alt='Logo' width={80} height={80}></Image>
        <h1 className='text-xl font-bold'>Manager Cars</h1>
      </div>
    </div>
  )
}
