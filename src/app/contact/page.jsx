import FormContact from '@/components/contact/FormContact'
import FormInfo from '@/components/contact/FormInfo'
import React from 'react'

const page = () => {
  return (
    <section className='flex justify-between h-[79.6vh]'>
      <FormContact />
      <FormInfo />
    </section>
  )
}

export default page