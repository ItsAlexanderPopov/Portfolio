import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <div id='Contact' className='m-4 flex flex-row items-center justify-between mb-24 sm:mb-4'>
      <p>Copyright © 2023.<br className='sm:hidden block'/> All rights are reserved</p>
      <Socials/>
    </div>
  ) 
}

export default Footer