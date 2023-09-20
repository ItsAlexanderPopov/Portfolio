import React from 'react'
import {SiLinkedin, SiGithub} from 'react-icons/si'
import Socials from './Socials'

const Footer = () => {
  return (
    <div className='h-24 flex justify-between items-center'>
      <p>Copyright © 2023. All rights are reserved</p>
      <Socials/>
    </div>
  )
}

export default Footer