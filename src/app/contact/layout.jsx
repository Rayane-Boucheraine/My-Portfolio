import AsideContact from '@/components/contact/AsideContact'
import Head from '@/components/Head';
import React from 'react'

const layout = ({children}) => {
  return (
    <section className="flex">
      <AsideContact />
      <div className="w-full">
        <Head name="Contact" />
        {children}
      </div>
    </section>
  );
}

export default layout